import PageLayout from "@/components/page-layout"
import Link from "next/link"
import { Headphones, ShoppingBag, Tag, Users, Mail, Phone, MapPin } from "lucide-react"

const moreItems = [
  {
    title: "Podcasts",
    description: "Listen to our gaming podcasts and discussions",
    icon: Headphones,
    href: "/more/podcasts",
    color: "bg-purple-600",
  },
  {
    title: "Store",
    description: "Official IGN merchandise and gaming gear",
    icon: ShoppingBag,
    href: "/more/store",
    color: "bg-green-600",
  },
  {
    title: "Deals",
    description: "Best gaming deals and discounts",
    icon: Tag,
    href: "/more/deals",
    color: "bg-orange-600",
  },
  {
    title: "Community",
    description: "Join our gaming community forums",
    icon: Users,
    href: "/more/community",
    color: "bg-blue-600",
  },
]

export default function MorePage() {
  return (
    <PageLayout title="More" description="Additional resources and services from IGN India">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {moreItems.map((item) => (
          <Link key={item.title} href={item.href}>
            <div className="group cursor-pointer bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full ${item.color}`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-red-400" />
            <div>
              <p className="text-white font-medium">Email</p>
              <p className="text-gray-400 text-sm">contact@ign.in</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-red-400" />
            <div>
              <p className="text-white font-medium">Phone</p>
              <p className="text-gray-400 text-sm">+91 12345 67890</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-red-400" />
            <div>
              <p className="text-white font-medium">Address</p>
              <p className="text-gray-400 text-sm">Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
