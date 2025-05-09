// Utility function to safely call updateFrom if it exists
export function safeUpdateFrom(obj, data) {
  if (obj && typeof obj.updateFrom === 'function') {
    obj.updateFrom(data);
  } else {
    console.warn('safeUpdateFrom: updateFrom method not found on object', obj);
  }
}

// Example usage
// import { safeUpdateFrom } from './utils/safeUpdateFrom';
// safeUpdateFrom(someObject, someData);
