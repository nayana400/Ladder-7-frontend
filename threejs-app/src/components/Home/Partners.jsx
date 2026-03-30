import neyndraLogo from '../../assets/Images/NeyndraLogo1.png';
import globalWebLogo from '../../assets/Images/GlobalWebLogo.webp';

function Partners() {
    return (
        <section className="py-12 bg-[oklch(0.97_0_0)] border-y border-gray-200 px-6">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-center text-black text-4xl font-bold mb-12 mt-4">Our Partners</h3>

                <div className="flex justify-center items-center gap-16 flex-wrap">
                    <img src={neyndraLogo} alt="Neyndra" className="w-24 h-12 md:w-32 md:h-16 object-contain" />
                    <img src={globalWebLogo} alt="Global Web" className="w-24 h-12 md:w-32 md:h-16 object-contain" />
                </div>
            </div>
        </section>
    );
}

export default Partners;
