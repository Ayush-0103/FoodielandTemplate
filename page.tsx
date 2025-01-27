import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex-1">
          <Badge variant="secondary" className="mb-4">
            Hot Recipe
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Spicy delicious
            <br />
            chicken wings
          </h1>
          <p className="text-muted-foreground mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Lz9WjE1YEOx52fWHnfHWaLdLhcmVOb.png"
                  alt="User"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-sm">John Smith</span>
            </div>
            <Button variant="default">View Recipe</Button>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Lz9WjE1YEOx52fWHnfHWaLdLhcmVOb.png"
              alt="Spicy Chicken Wings"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Categories</h2>
          <Link href="#" className="text-sm text-blue-500">
            View all Categories
          </Link>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
              </div>
              <span className="text-sm">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recipes Section */}
      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Simple and tasty recipes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Card key={recipe.title}>
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Lz9WjE1YEOx52fWHnfHWaLdLhcmVOb.png"
                    alt={recipe.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{recipe.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{recipe.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{recipe.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const categories = [
  { name: "Breakfast" },
  { name: "Veggie" },
  { name: "Meat" },
  { name: "Dessert" },
  { name: "Lunch" },
  { name: "Chocolate" },
]

const recipes = [
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    rating: "4.8",
    comments: "125",
  },
  {
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    rating: "4.7",
    comments: "98",
  },
  {
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    rating: "4.9",
    comments: "147",
  },
  {
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    rating: "4.6",
    comments: "86",
  },
  {
    title: "Chicken Meatballs with Cream Cheese",
    rating: "4.8",
    comments: "112",
  },
  {
    title: "Fruity Pancake with Orange & Blueberry",
    rating: "4.7",
    comments: "94",
  },
  {
    title: "The Best Easy One Pan Fish and Rice",
    rating: "4.9",
    comments: "135",
  },
  {
    title: "The Creamiest Chicken and Bacon Pasta",
    rating: "4.8",
    comments: "147",
  },
]

