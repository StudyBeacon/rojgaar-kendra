import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-aliceBlue py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Follow us on</p>
        <div className="flex justify-center space-x-6">
          <a href="" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>

          <a href="" className="hover:text-blue-300">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>

          <a href="" className="hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>

          <a href="" className="hover:text-blue-700">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>

        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} Rojgaar Hub. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
