import { getResources, getResourceById } from '../api/resources';

export async function ResourceDirectoryLoader() {
  const resources = await getResources();
}

export async function AdminLoader() {}
