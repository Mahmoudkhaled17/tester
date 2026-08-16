export async function objectSignature ( obj: unknown ): Promise<string> {
  const stable = stableStringify( obj )
  const encoder = new TextEncoder()
  const data = encoder.encode( stable )
  const hashBuffer = await crypto.subtle.digest( "SHA-256", data )
  return [...new Uint8Array( hashBuffer )]
    .map( b => b.toString( 16 ).padStart( 2, "0" ) )
    .join( "" )
}

function stableStringify ( value: any ): string {
  if ( value === null || typeof value !== "object" ) {
    return JSON.stringify( value )
  }

  if ( Array.isArray( value ) ) {
    return "[" + value.map( v => stableStringify( v ) ).join( "," ) + "]"
  }

  const keys = Object.keys( value ).sort()
  const entries = keys.map(
    k => JSON.stringify( k ) + ":" + stableStringify( value[k] )
  )
  return "{" + entries.join( "," ) + "}"
}
