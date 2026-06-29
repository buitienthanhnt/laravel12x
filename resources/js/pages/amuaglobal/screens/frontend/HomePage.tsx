import { router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import amua from "@/routes/amua";
import { MainCategory } from "../../components/home-page";

export default function HomePage() {
  return (
    <div>
      <Button onClick={() => {
        router.get(amua.product.list.url());
      }}>HomePage</Button>
      <MainCategory></MainCategory>
    </div>

  );
}

