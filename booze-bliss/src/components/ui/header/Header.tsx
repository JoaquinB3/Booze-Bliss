"use client";

import Link from "next/link";
import Image from "next/image";
import ContainerFlex from "../containerFlex/ContainerFlex";
import { useState } from "react";
import styles from "./Header.module.css";
import LocalBarIcon from '@mui/icons-material/LocalBar';

type LinkType = {
	name: string;
	href: string;
};

interface HeaderProps {
	links: LinkType[];
}

const Header = ({ links }: HeaderProps) => {
	const [clickMenu, setClickMenu] = useState<boolean>(false);
	const user = {
		name: "Joaquin Botteri",
		role: "Admin",
		image:
			"https://th.bing.com/th/id/OIP.Z8J_Ho1F_9qacAbb9ZwInQHaJQ?w=800&h=1000&rs=1&pid=ImgDetMain",
	};

	const handleClick = (): void => {
		setClickMenu(!clickMenu);
	};

	return (
		<header className='fixed top-0 z-[9999999] w-full shadow-lg shadow-gray-400/30 h-[80px] bg-secondary text-white'>
			<div className='flex bg-black relative z-[9999999] h-full w-[100%] justify-between items-center max-w-screen-lg lg:max-w-screen-xl 2xl:max-w-screen-2xl m-auto px-10'>
                <div>
                    <LocalBarIcon sx={{color: "#15c0bd"}} />
                </div>
				<div className='flex gap-[80px] py-[15px]'>
					<nav className='hidden lg:flex align-center'>
						<ul className='flex justify-center items-center gap-[45px] font-medium'>
							{links.map((link) => (
								<li key={link.name}>
									<Link href={link.href} className={`${styles.underline}`}>{link.name}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
                <ContainerFlex className='gap-3 hidden lg:flex'>
                    <picture>
                        <Image
                            src={user.image}
                            width={50}
                            height={50}
                            alt=''
                            className='rounded-full w-[50px] h-[50px] object-cover'
                        />
                    </picture>
                    <div>
                        <p className='font-medium text-base'>{user.name}</p>
                        <p className='font-light text-sm hover:underline cursor-pointer'>Mi cuenta</p>
                    </div>
                </ContainerFlex>
			</div>
			<ContainerFlex
				className={`${clickMenu ? "flex flex-col" : "-translate-y-full relative -top-[90px] z-[99999]"} transition-transform lg:hidden bg-tertiary text-secondary shadow-lg shadow-gray-400/30 !justify-start !items-start py-6`}>
				<ul className={`flex flex-col gap-[30px] font-medium w-full m-auto px-[40px] max-w-5xl`}>
					{links.map((link) => (
						<li key={link.name}>
							<Link href={link.href} className={`${styles.underline}`}>{link.name}</Link>
						</li>
					))}
					<ContainerFlex className='gap-3 xl:flex !justify-start'>
						<picture>
							<Image
								src={user.image}
								width={50}
								height={50}
								alt=''
								className='rounded-full w-[50px] h-[50px] object-cover'
							/>
						</picture>
						<div>
							<p className='font-medium text-base'>{user.name}</p>
							<p className='font-light text-sm hover:underline cursor-pointer'>Mi cuenta</p>
						</div>
					</ContainerFlex>
				</ul>
			</ContainerFlex>
		</header>
	);
};

export default Header;