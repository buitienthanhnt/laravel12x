
import type { InertiaConfig } from '@inertiajs/core';
import { Link } from '@inertiajs/react';
import { manage } from '@/routes/akho';

export default function Home(props: InertiaConfig['sharedPageProps']) {

  console.log(props);
  
  return (
    <div>
      <h2>demo home page</h2>
      <h3>{props.demo as string}</h3>
      {/* <Link href={manage.url({id: 12})}>Manage</Link> */}
      <Link href={manage.url()}>Manage</Link>
    </div>
  );
}