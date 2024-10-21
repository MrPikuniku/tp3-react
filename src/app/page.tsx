import Image from "next/image";
import { PRODUCTS_CATEGORY_DATA} from "@arthur.eudeline/starbucks-tp-kit/data";
import { BreadCrumbs } from "@arthur.eudeline/starbucks-tp-kit/components/breadcrumbs";
import { SectionContainer } from "@arthur.eudeline/starbucks-tp-kit/components/section-container";
import { ProductGridLayout } from "@arthur.eudeline/starbucks-tp-kit/components/products/product-grid-layout";
import { ProductCardLayout } from "@arthur.eudeline/starbucks-tp-kit/components/products/product-card-layout";
import { Button } from "@arthur.eudeline/starbucks-tp-kit/components/button";

const categories = PRODUCTS_CATEGORY_DATA;
console.log(categories);

export default function Home() {
  


  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <BreadCrumbs 
          items={[
            { 
              label: 'Accueil', 
              url:'#1' 
            }
            
          ]}
        
        />
        <SectionContainer>
        { categories.map((categorie)=> 
        <SectionContainer>
          {
            categorie.name  
          }({categorie.products.length})
          <ProductGridLayout products={categorie.products}>
	          {(product) => (
              <ProductCardLayout
                product={product}
                button={
                  <Button variant={"ghost"} fullWidth>
                    Ajouter au panier
                  </Button>
                }
            />)}
          </ProductGridLayout>
        </SectionContainer>
        )
        }
      </SectionContainer>

        
        
      </main>
  );
}
