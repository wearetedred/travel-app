import { FaBuilding, FaMapMarkerAlt, FaBed, FaPercent, FaBell, FaSearch } from 'react-icons/fa'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  { icon: <FaBuilding className="w-6 h-6" />, title: "Hotel brands to choose from", value: "60+" },
  { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: "Hotel destinations to explore", value: "5,000+" },
  { icon: <FaBed className="w-6 h-6" />, title: "Hotels available worldwide", value: "3.2 million" },
]

const features = [
  {
    icon: <FaPercent className="w-12 h-12 text-blue-500" />,
    title: "Great hotel deals",
    description: "We search for deals with the world&apos;s leading hotels, and share our findings with you.",
  },
  {
    icon: <FaBell className="w-12 h-12 text-yellow-500" />,
    title: "Up-to-date pricing",
    description: "We always show you the most recent pricing overview we can find, so you know exactly what to expect.",
  },
  {
    icon: <FaSearch className="w-12 h-12 text-green-500" />,
    title: "Precise searching",
    description: "Find hotels with swimming pools, free cancellation, and flexible booking. Or whatever matters most to you.",
  },
]

export default function FastFacts() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Fast facts</h2>
        <p className="text-gray-600 mb-8">Sleep easy, armed with the stuff that&apos;s good to know before you go.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {stat.icon}
              <h3 className="mt-2 text-lg font-semibold">{stat.title}</h3>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
