import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

export default function Home() {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-xl">Software Developer</span>
						<h1 className="h1 mb-6">
							Hello i'm <br></br> <span className="text-accent">Chayan Roy</span>
						</h1>
						<p className="max-w-[500px] mb-9 text-white/80">fkjvbhn xv,mfcdx vk, dsfkvjsdkvbsdjv sdj vdsv sdjv skdhjv sdhjv sdvuhjsdvhdsv dsh vdshvsdj vhjsdgv d d fkshvjb hsdfuvsbdfv dsvusd vudsv s</p>
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
								<span>Download CV</span>
								<FiDownload className="text-xl" />
							</Button>
							<div className="mb-8 xl:mb-0">
								<Socials
									containerStyle="flex gap-6"
									iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
							</div>
						</div>
					</div>
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
		</section>
	);
}