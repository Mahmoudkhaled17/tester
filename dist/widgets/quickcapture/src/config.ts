import type { ImmutableObject } from "seamless-immutable"

export interface Config {
  captureMode: "mapSketch" | "locationSensor"
  designerMode: boolean
  loading: boolean
  projectId: string
}

export type IMConfig = ImmutableObject<Config>
