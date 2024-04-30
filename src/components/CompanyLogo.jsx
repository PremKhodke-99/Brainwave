import { companyLogos } from "../constants"

const CompanyLogo = ({ className }) => {
    return (
        <div className={className}>
            <h5 className="tagline mb-6 text-center text-n-1/60">Helping people create beautiful content</h5>
            <ul className="flex">
                {companyLogos.map((logo, index) => (
                    <li className="flex items-center justify-center flex-1 h-[8.5rem]" key={index}>
                        <img src={logo} width={134} height={134} alt={logo} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompanyLogo