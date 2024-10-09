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
          {
            categories[0].name  
          }({categories[0].products.length})
          <ProductGridLayout products={categories[0].products}>
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


        <SectionContainer>
        {
            categories[1].name  
          }({categories[1].products.length})
          <ProductGridLayout products={categories[1].products}>
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


        <SectionContainer>
          {
            categories[2].name  
          }({categories[2].products.length})
          <ProductGridLayout products={categories[2].products}>
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

        <SectionContainer>
          {
            categories[3].name  
          }({categories[3].products.length})
          <ProductGridLayout products={categories[3].products}>
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

        <SectionContainer>
          {
            categories[4].name  
          }({categories[4].products.length})
          <ProductGridLayout products={categories[4].products}>
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

        <SectionContainer>
          {
            categories[5].name  
          }({categories[5].products.length})
          <ProductGridLayout products={categories[5].products}>
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

        <SectionContainer>
          {
            categories[6].name  
          }({categories[6].products.length})
          <ProductGridLayout products={categories[6].products}>
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

        <SectionContainer>
          {
            categories[7].name  
          }({categories[7].products.length})
          <ProductGridLayout products={categories[7].products}>
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

        <SectionContainer>
          {
            categories[8].name  
          }({categories[8].products.length})
          <ProductGridLayout products={categories[8].products}>
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

        <SectionContainer>
          {
            categories[9].name  
          }({categories[9].products.length})
          <ProductGridLayout products={categories[9].products}>
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

        <SectionContainer>
          {
            categories[10].name  
          }({categories[10].products.length})
          <ProductGridLayout products={categories[10].products}>
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

        
      </main>
  );
}
