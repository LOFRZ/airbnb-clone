import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
import Image from "next/image"

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6"> 
        <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
            <Image
                fill
                src='/beach_1.jpg'
                className="object-cover w-full h-full"
                alt="beach house"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="py-6 pr-6 col-span-3">
                <h1 className="mb-4 text-4xl">Prop Name</h1>

                <span className="mb-6 block text-lg text-gray-600">
                    GuestS
                </span>


                <hr />

                <div className="py-6 flex items-center space-x-4">
                    <Image
                        src="/profile_pic_1.jpg"
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt="User name"
                    />

                    <p><strong>Jhon</strong> is your hote</p>
                </div>

                <hr />

                <p className="mt-6 text-lg">
                    Lorem fzsozuhgeiluqùpaieghQMZYGzmogulizR
                </p>
            </div>

            <ReservationSidebar />
        </div>
    </main>
  )
}


export default PropertyDetailPage;