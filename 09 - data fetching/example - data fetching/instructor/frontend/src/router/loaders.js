import { getResources, getResourceById } from '../api/resources';

export async function ResourceDirectoryLoader() {
  const resources = await getResources();
  return { resources };
  /* The point of a loader function is to grab some data,
     and return an object with all of that data (might be multiple things)
     showing up in named properties.

     In the component, we'll use this like:
       import { useLoaderData } from 'react-router';

       const data = useLoaderData(); // grabs whatever data is at that route automatically
       console.log(data.resources)
  */
}

export async function AdminLoader() {}