// This configuration file is a single place to provide any values to set up the app

export const IDENTITY_POOL_ID = 'ap-northeast-1:b473235c-f90a-44e8-8b84-63bdc4961eef'; // REQUIRED - Amazon Cognito Identity Pool ID

export const REGION = 'ap-northeast-1'; // REQUIRED - Amazon Cognito Region

export const MAP = {
  NAME: 'WorkshopMap', // REQUIRED - Amazon Location Service map resource name
  STYLE: 'VectorEsriStreets', // REQUIRED - String representing the style of map resource
};

export const PLACE = 'WorkshopIndex'; // REQUIRED - Amazon Location Service place index resource name

export const ROUTE = 'WorkshopRoutes'; // REQUIRED - Amazon Location Service route calculator resource name

export const GEOFENCE = 'WorkshopCollection'; // REQUIRED - Amazon Location Service geofence collection resource name

export const TRACKER = 'WorkshopAssets'; // REQUIRED - Amazon Location Service tracker resource name

export const TRACKER_SIMULATED_DEVICE = 'Vehicle-1'; // REQUIRED - Simulated Device ID (Defaulting to Vehicle-1)
