import { getResources, getResourceById } from '../api/resources';

export async function ResourceDirectoryLoader() {
  const resources = await getResources();
  return { resources };
}

export async function AdminLoader({ params }) {
  const resources = await getResources();
  if (!params.ResourceId) {
    return {
      resources,
      resourceId: null,
      selectedResource: null,
    };
  }

  const selectedResource = await getResourceById(params.resourceId);
  return {
    resources,
    resourceId: params.resourceId,
    selectedResource,
  };
}
