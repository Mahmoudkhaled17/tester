
import type { EventInfo, LrsLayer, RouteInfo } from 'widgets/shared-code/lrs'
import { isDefined, getDateWithoutTime } from '../../../../../shared-code/lib/lrs/utilities/utils'
import defaultMessages from '../translations/default'
import { round } from 'lodash-es'
import type { ImmutableObject } from 'seamless-immutable'

export interface RouteValidationResult {
  isValid: boolean
  messageKey?: string
}

  export function validateDateUtil (date: Date, isFromDate: boolean, routeInfo, fromDateToolTip, toDateToolTip, intl) {
    const dateInfo = {
      setFromDateStatus: '',
      setToDateStatus: '',
      setFromDateToolTip: '',
      setToDateToolTip: '',
      validDate: true
    }
    const selectedDate = date
    if (!isDefined(selectedDate)) {
      isFromDate ? dateInfo.setFromDateStatus = 'idle' : dateInfo.setToDateStatus = 'idle'
      isFromDate ? dateInfo.setFromDateToolTip = '' : dateInfo.setToDateToolTip = ''
      return dateInfo
    }

    const selectedDateWithoutTime: Date = getDateWithoutTime(selectedDate)
    const routeInfoFromDateWithoutTime: Date = getDateWithoutTime(routeInfo?.fromDate)
    const routeInfoToDateWithoutTime: Date = getDateWithoutTime(routeInfo?.toDate)
    const routeInfoSelectedFromDateWithoutTime: Date = getDateWithoutTime(routeInfo?.selectedFromDate)
    const routeInfoSelectedToDateWithoutTime: Date = getDateWithoutTime(routeInfo?.selectedToDate)
    const routeInfoToRouteFromDateWithoutTime: Date = getDateWithoutTime(routeInfo?.toRouteFromDate)
    const routeInfoToRouteToDateWithoutTime: Date = getDateWithoutTime(routeInfo?.toRouteToDate)

    // Check if selected date is before the routes from date.
    if (isDefined(routeInfo?.fromDate)) {
      if (selectedDateWithoutTime < routeInfoFromDateWithoutTime) {
        isFromDate ? dateInfo.setFromDateStatus = 'invalid' : dateInfo.setToDateStatus ='invalid'
        isFromDate ? dateInfo.setFromDateToolTip = intl.formatMessage({id: 'invalidFromDateBefore', defaultMessage: defaultMessages.invalidFromDateBefore}) :
            dateInfo.setToDateToolTip = intl.formatMessage({id:'invalidToDateBefore', defaultMessage: defaultMessages.invalidToDateBefore})
        dateInfo.validDate = false
        return dateInfo
      }
    }

    // Check if the selected date is before the to routes from date
    // Verify that the selected date is not before the to route from date.
    if (isDefined(routeInfo?.toRouteFromDate)) {
      if (selectedDateWithoutTime < routeInfoToRouteFromDateWithoutTime) {
        isFromDate ? dateInfo.setFromDateStatus ='invalid' : dateInfo.setToDateStatus ='invalid'
        isFromDate ? dateInfo.setFromDateToolTip = intl.formatMessage({id:'invalidFromDateBefore', defaultMessage: defaultMessages.invalidFromDateBefore}) :
        dateInfo.setToDateToolTip = intl.formatMessage({id:'invalidToDateBefore', defaultMessage: defaultMessages.invalidToDateBefore})
        dateInfo.validDate = false
        return dateInfo
      }
    }

    // Check if the selected date is after the routes to date.
    if (isDefined(routeInfo?.toDate)) {
      if (selectedDateWithoutTime > routeInfoToDateWithoutTime) {
        isFromDate ? dateInfo.setFromDateStatus = 'invalid' : dateInfo.setToDateStatus = 'invalid'
        isFromDate ? dateInfo.setFromDateToolTip = intl.formatMessage({id: 'invalidFromDateAfter', defaultMessage: defaultMessages.invalidFromDateAfter}) :
        dateInfo.setToDateToolTip = intl.formatMessage({id: 'invalidToDateAfter', defaultMessage: defaultMessages.invalidToDateAfter})
        dateInfo.validDate = false
        return dateInfo
      }
    }

    // Check if the selected date is after the to routes to date.
    // Verify that the selected date is not after the to route to date.
    if (isDefined(routeInfo?.toRouteToDate)) {
      if (selectedDateWithoutTime > routeInfoToRouteToDateWithoutTime) {
        isFromDate ? dateInfo.setFromDateStatus = 'invalid' : dateInfo.setToDateStatus = 'invalid'
        isFromDate ? dateInfo.setFromDateToolTip = intl.formatMessage({id: 'invalidFromDateAfter', defaultMessage: defaultMessages.invalidFromDateAfter}) :
        dateInfo.setToDateToolTip = intl.formatMessage({id: 'invalidToDateAfter', defaultMessage: defaultMessages.invalidToDateAfter})
        dateInfo.validDate = false
        return dateInfo
      }
    }

    // From date is greater than to date
    if (isDefined(routeInfo?.selectedToDate)) {
      if (isFromDate) {
        if (selectedDateWithoutTime > routeInfoSelectedToDateWithoutTime) {
          dateInfo.setFromDateStatus = 'invalid'
          isFromDate ? dateInfo.setFromDateToolTip = intl.formatMessage({id: 'invalidDatesOrder', defaultMessage: defaultMessages.invalidDatesOrder}) :
          dateInfo.setToDateToolTip = intl.formatMessage({id: 'invalidDatesOrder', defaultMessage: defaultMessages.invalidDatesOrder})
          dateInfo.validDate = false
        }
        // see if we need to clear toDate error
        if (toDateToolTip === intl.formatMessage({id: 'invalidDatesOrder', defaultMessage: defaultMessages.invalidDatesOrder})) {
          if (selectedDateWithoutTime < routeInfoSelectedToDateWithoutTime) {
            dateInfo.setToDateStatus = 'idle'
            dateInfo.setToDateToolTip = ''
          }
        // see if this fixes to date error where dates were same
        } else if (toDateToolTip === intl.formatMessage({id: 'invalidDatesSameDay', defaultMessage: defaultMessages.invalidDatesSameDay})) {
          if (selectedDateWithoutTime !== routeInfoSelectedFromDateWithoutTime) {
            dateInfo.setToDateStatus = 'idle'
            dateInfo.setToDateToolTip = ''
          }
        }
      }
    }

    // From date and to date are equal
    if (isDefined(routeInfo?.selectedToDate)) {
      if (isFromDate && selectedDateWithoutTime.getTime() === routeInfoSelectedToDateWithoutTime.getTime()) {
        dateInfo.setFromDateStatus = 'invalid'
        isFromDate ? dateInfo.setFromDateToolTip = intl.formatMessage({id: 'invalidDatesSameDay', defaultMessage: defaultMessages.invalidDatesSameDay}) :
        dateInfo.setToDateToolTip = intl.formatMessage({id: 'invalidDatesSameDay', defaultMessage: defaultMessages.invalidDatesSameDay})
        dateInfo.validDate = false
      }
    }

    // To date is less than from date
    if (isDefined(routeInfo?.selectedFromDate)) {
      if (!isFromDate) {
        if (selectedDateWithoutTime < routeInfoSelectedFromDateWithoutTime) {
          dateInfo.setToDateStatus = 'invalid'
          isFromDate ? dateInfo.setFromDateToolTip = intl.formatMessage({id: 'invalidDatesOrder', defaultMessage: defaultMessages.invalidDatesOrder}) :
          dateInfo.setToDateToolTip = intl.formatMessage({id: 'invalidDatesOrder', defaultMessage: defaultMessages.invalidDatesOrder})
          dateInfo.validDate = false
        }
        // see if we need to clear from date error
        if (fromDateToolTip === intl.formatMessage({id: 'invalidDatesOrder', defaultMessage: defaultMessages.invalidDatesOrder})) {
          if (selectedDateWithoutTime > routeInfoSelectedFromDateWithoutTime) {
            dateInfo.setFromDateStatus = 'idle'
            dateInfo.setFromDateToolTip = ''
          }
        // see if we need to clear from date equals error
        } else if (fromDateToolTip === intl.formatMessage({id: 'invalidDatesSameDay', defaultMessage: defaultMessages.invalidDatesSameDay})) {
          if (selectedDateWithoutTime !== routeInfoSelectedFromDateWithoutTime) {
            dateInfo.setFromDateStatus = 'idle'
            dateInfo.setFromDateToolTip = ''
          }
        }
      }
    }

    // To date and from date are equal
    if (isDefined(routeInfo?.selectedFromDate)) {
      if (!isFromDate && selectedDateWithoutTime.getTime() === routeInfoSelectedFromDateWithoutTime.getTime()) {
        dateInfo.setToDateStatus = 'invalid'
        isFromDate ? dateInfo.setFromDateToolTip = intl.formatMessage({id: 'invalidDatesSameDay', defaultMessage: defaultMessages.invalidDatesSameDay}) :
        dateInfo.setToDateToolTip = intl.formatMessage({id: 'invalidDatesSameDay', defaultMessage: defaultMessages.invalidDatesSameDay})
        dateInfo.validDate = false
      }
    }

    if (dateInfo.validDate) {
      isFromDate ? dateInfo.setFromDateStatus = 'idle' : dateInfo.setToDateStatus = 'idle'
      isFromDate ? dateInfo.setFromDateToolTip = '' : dateInfo.setToDateToolTip =''
    }

    return dateInfo
  }

  export function isValidRouteSelectionUtil (
    routeInfo: RouteInfo,
    selectedEvent: ImmutableObject<EventInfo>,
    lockAcquired: boolean,
    selectedNetwork: ImmutableObject<LrsLayer>,
    validateLock = true): RouteValidationResult {

    if (!isDefined(routeInfo)) {
      return { isValid: false, messageKey: 'validationRouteInfoRequired' }
    }

    if (!routeInfo.routeId || routeInfo.routeId.length === 0) {
      return { isValid: false, messageKey: 'validationRouteIdRequired' }
    }

    if (!routeInfo.toRouteId || routeInfo.toRouteId.length === 0) {
      return { isValid: false, messageKey: 'validationToRouteIdRequired' }
    }

    if (validateLock && !lockAcquired) {
      return { isValid: false, messageKey: 'validationLockNotAcquired' }
    }

    if (!isDefined(selectedNetwork) || !isDefined(selectedNetwork.networkInfo)) {
      return { isValid: false, messageKey: 'validationNetworkRequired' }
    }

    const fromMeasure = round(routeInfo.fromMeasure, selectedNetwork.networkInfo.measurePrecision)
    const toMeasure = round(routeInfo.toMeasure, selectedNetwork.networkInfo.measurePrecision)
    const selectedFromMeasure = round(routeInfo.selectedMeasure, selectedNetwork.networkInfo.measurePrecision)
    const selectedToMeasure = round(routeInfo.selectedToMeasure, selectedNetwork.networkInfo.measurePrecision)

    if (!isNaN(fromMeasure) && !isNaN(selectedFromMeasure)) {
      if (selectedFromMeasure < fromMeasure) {
        return { isValid: false, messageKey: 'validationFromMeasureLessThanRouteFromMeasure' }
      }
      if (routeInfo.routeId === routeInfo.toRouteId && selectedFromMeasure >= selectedToMeasure) {
        return { isValid: false, messageKey: 'fromMeasureGreaterThanToMeasure' }
      }
    } else {
      // No route selected or no measure on selected route.
      return { isValid: false, messageKey: 'validationMeasureRequired' }
    }

    if (!isNaN(selectedFromMeasure) && !isNaN(selectedToMeasure) && (routeInfo.routeId === routeInfo.toRouteId)) {
      // Selected from measure is greater than selected to measure.
      if (selectedFromMeasure > selectedToMeasure) {
        return { isValid: false, messageKey: 'fromMeasureGreaterThanToMeasure' }
      }
    }

    if (!selectedEvent?.canSpanRoutes) {
      if (!isNaN(toMeasure) && !isNaN(selectedToMeasure)) {
        if (selectedToMeasure > toMeasure) {
          return { isValid: false, messageKey: 'validationToMeasureGreaterThanRouteToMeasure' }
        }
        if (routeInfo.routeId === routeInfo.toRouteId && selectedFromMeasure >= selectedToMeasure) {
          return { isValid: false, messageKey: 'fromMeasureGreaterThanToMeasure' }
        }
      } else {
        // No route selected or no measure on selected route.
        return { isValid: false, messageKey: 'validationMeasureRequired' }
      }
    } else {
      const toRouteFromMeasure = round(routeInfo.toRouteFromMeasure, selectedNetwork.networkInfo.measurePrecision)
      const toRouteToMeasure = round(routeInfo.toRouteToMeasure, selectedNetwork.networkInfo.measurePrecision)
      if (!isNaN(toRouteFromMeasure) && !isNaN(selectedToMeasure)) {
        if (selectedToMeasure < toRouteFromMeasure) {
          return { isValid: false, messageKey: 'validationToMeasureLessThanRouteFromMeasure' }
        }
      } else {
        // No route selected or no measure on selected route.
        return { isValid: false, messageKey: 'validationMeasureRequired' }
      }
      if (!isNaN(toRouteToMeasure) && !isNaN(selectedToMeasure)) {
        if (selectedToMeasure > toRouteToMeasure) {
          return { isValid: false, messageKey: 'validationToMeasureGreaterThanRouteToMeasure' }
        }
      } else {
        // No route selected or no measure on selected route.
        return { isValid: false, messageKey: 'validationMeasureRequired' }
      }
      if (routeInfo.routeId === routeInfo.toRouteId) {
        if (selectedFromMeasure >= selectedToMeasure) {
          return { isValid: false, messageKey: 'fromMeasureGreaterThanToMeasure' }
        }
      }
    }

    const routeInfoFromDateWithoutTime: Date = getDateWithoutTime(routeInfo.fromDate)
    const routeInfoToDateWithoutTime: Date = getDateWithoutTime(routeInfo.toDate)
    const routeInfoSelectedFromDateWithoutTime: Date = getDateWithoutTime(routeInfo.selectedFromDate)
    const routeInfoSelectedToDateWithoutTime: Date = getDateWithoutTime(routeInfo.selectedToDate)
    const routeInfoToRouteFromDateWithoutTime: Date = getDateWithoutTime(routeInfo?.toRouteFromDate)
    const routeInfoToRouteToDateWithoutTime: Date = getDateWithoutTime(routeInfo?.toRouteToDate)

    // dates
    if (
      isDefined(routeInfo.selectedFromDate) &&
      !isDefined(routeInfo.selectedToDate)
    ) {
      // Only from date provided.
      if (isDefined(routeInfo.fromDate)) {
        if (routeInfoSelectedFromDateWithoutTime < routeInfoFromDateWithoutTime) {
          return { isValid: false, messageKey: 'validationFromDateLessThanRouteStartDate' }
        }
      }
      if (isDefined(routeInfo.toDate)) {
        if (routeInfoSelectedFromDateWithoutTime >= routeInfoToDateWithoutTime) {
          return { isValid: false, messageKey: 'validationFromDateGreaterThanRouteEndDate' }
        }
      }
    }
    if (
      !isDefined(routeInfo.selectedFromDate) &&
      isDefined(routeInfo.selectedToDate)
    ) {
      // Only to date provided.
      if (isDefined(routeInfo.fromDate)) {
        if (routeInfoSelectedToDateWithoutTime < routeInfoFromDateWithoutTime) {
          return { isValid: false, messageKey: 'validationToDateLessThanRouteStartDate' }
        }
      }
      if (isDefined(routeInfo.toDate)) {
        if (routeInfoSelectedToDateWithoutTime >= routeInfoToDateWithoutTime) {
          return { isValid: false, messageKey: 'validationToDateGreaterThanRouteEndDate' }
        }
      }
    }
    if (
      isDefined(routeInfo.selectedFromDate) &&
      isDefined(routeInfo.selectedToDate)
    ) {
      // Both from and to date provided.
      if (routeInfoSelectedFromDateWithoutTime >= routeInfoSelectedToDateWithoutTime) {
        return { isValid: false, messageKey: 'validationFromDateAfterToDate' }
      }
      if (isDefined(routeInfo.fromDate)) {
        if (routeInfoSelectedFromDateWithoutTime < routeInfoFromDateWithoutTime) {
          return { isValid: false, messageKey: 'validationFromDateLessThanRouteStartDate' }
        }
      }
      if (isDefined(routeInfo.toDate)) {
        if (routeInfoSelectedToDateWithoutTime > routeInfoToDateWithoutTime) {
          return { isValid: false, messageKey: 'validationToDateGreaterThanRouteEndDate' }
        }
      }
    }
    if (
      !isDefined(routeInfo.selectedFromDate) &&
      !isDefined(routeInfo.selectedToDate)
    ) {
      // No date selected.
      return { isValid: false, messageKey: 'validationDateRequired' }
    }
    // verify that both routes are within the selected date range
    if (routeInfo.routeId !== routeInfo.toRouteId) {
      if (isDefined(routeInfo.fromDate) && isDefined(routeInfo.toRouteFromDate)) {
        if (routeInfoSelectedFromDateWithoutTime < routeInfoFromDateWithoutTime || (isDefined(routeInfo.toDate) && routeInfoSelectedFromDateWithoutTime > routeInfoToDateWithoutTime) ||
          routeInfoSelectedFromDateWithoutTime < routeInfoToRouteFromDateWithoutTime || (isDefined(routeInfo.toRouteToDate) && routeInfoSelectedFromDateWithoutTime > routeInfoToRouteToDateWithoutTime)) {
          return { isValid: false, messageKey: 'validationDateOutsideRouteRange' }
        }
      }
    }

    return { isValid: true, messageKey: 'nextLabel' }
  }