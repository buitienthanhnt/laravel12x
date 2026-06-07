
import type { InertiaConfig } from '@inertiajs/core';

export default function Home(props: InertiaConfig['sharedPageProps']) {

  return (
    <div>
      <h2>demo home page</h2>
      <h3>{props.demo as string}</h3>
      {/* <Link href={manage.url({id: 12})}>Manage</Link> */}

    </div>
  );
}