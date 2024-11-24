import { Button } from "./ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

const categories = [
  "FrontEnd Developer",
  "BackEnd Developer",
  "Data Science",
  "Machine Learning",
  "Graphic Designer",
  "FullStack Developer",
]

const CategoryCarousel = () => {
  return (
    <Carousel className="w-full max-w-xl mx-auto my-16">
      <CarouselContent>
        {categories.map((category, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Button
              variant="ghost"
              className="text-darkBlue hover:bg-aliceBlue hover:text-skyBlue"
            >
              {category}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CategoryCarousel
