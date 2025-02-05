import Link from 'next/link'
import { Heading } from '@ensdomains/thorin'
import ConnectButtonWrapper from '../components/connect-button'

export default function Header() {
	return (
		<header className="header">
			<Link href="/">
				<a>
					<Heading as="span" level="2" className="header__name">
						ENS Fairy
					</Heading>
				</a>
			</Link>
			<ConnectButtonWrapper />
		</header>
	)
}
