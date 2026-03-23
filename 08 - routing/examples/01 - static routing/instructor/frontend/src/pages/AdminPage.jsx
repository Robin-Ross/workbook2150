import { useResources } from '../hooks/useResources';

import Card from '../components/ui/Card';

export default function AdminPage() {

  {/* We're just reusing the hook we made to grab all our student services resources from API!
      
      This is the nice thing about modular components & logic — we can isolate out something
      that performs a specific function/role, and reuse it!

      We had to do zero effort to populate our list of resources for the admin page, and it will
      work exactly the same way in all the places it's used. And if we needed to fix something in that
      logic, we only have to fix it in one place!
  */}
  const { resources, isLoading, error, refetch } = useResources();

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="text-sm text-base-content/70">
          Manage student resources.
        </p>
      </div>

      {isLoading && <p>Loading resources...</p>}

      {error && (
        <div className="alert alert-error">
          <span>{error.message}</span>
          <button className="btn btn-sm" onClick={refetch}>Try again</button>
        </div>
      )}

      <section className="md:col-span-3 lg:col-span-3">
        <Card title="Current Resources">
          <div className="card-body">
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.id} className="rounded border border-gray-200 p-3">
                  <p className="font-semibold">{resource.title}</p>
                  <p className="text-sm text-base-content/70">{resource.category}</p>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </section>
    </>
  );
}
