import Cards from "@/components/Cards";
import BarChart from "@/components/BarChart";

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col p-4'>
            <Cards />
            <div className='my-4 md:grid-cols-3 grid-cols-1 gap-4'>
                <BarChart />
            </div>
        </main>
    )
}
