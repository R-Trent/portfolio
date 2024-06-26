import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Privacy() {
  return (
    <>
      <PageSEO
        title={`Privacy Policy | ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Privacy Policy
          </h1>
        </div>
        <div className="py-2">
          <p>
            Ryan Trent built the Word Helper: Word Game Solver app as an Open Source app. This
            SERVICE is provided by Ryan Trent at no cost and is intended for use as is.
          </p>
          <br />
          <p>
            This page is used to inform visitors regarding my policies with the collection, use, and
            disclosure of Personal Information if anyone decided to use my Service.
          </p>
          <br />
          <p>
            If you choose to use my Service, then you agree to the collection and use of information
            in relation to this policy. The Personal Information that I collect is used for
            providing and improving the Service. I will not use or share your information with
            anyone except as described in this Privacy Policy.
          </p>
          <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Information Collection and Use
          </h2>
          <p>
            For a better experience, while using our Service, I may require you to provide us with
            certain personally identifiable information. The information that I request will be
            retained on your device and is not collected by me in any way.
          </p>
          <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Log Data
          </h2>
          <p>
            I want to inform you that whenever you use my Service, in a case of an error in the app
            I collect data and information (through third-party products) on your phone called Log
            Data. This Log Data may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of the app when
            utilizing my Service, the time and date of your use of the Service, and other
            statistics.
          </p>
          <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Cookies
          </h2>
          <p>
            Cookies are files with a small amount of data that are commonly used as anonymous unique
            identifiers. These are sent to your browser from the websites that you visit and are
            stored on your device's internal memory.
          </p>
          <br />
          <p>
            This Service does not use these “cookies” explicitly. However, the app may use
            third-party code and libraries that use “cookies” to collect information and improve
            their services. You have the option to either accept or refuse these cookies and know
            when a cookie is being sent to your device. If you choose to refuse our cookies, you may
            not be able to use some portions of this Service.
          </p>
          <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Service Providers
          </h2>
          <p>I may employ third-party companies and individuals due to the following reasons:</p>
          <br />
          <ul className="ml-5 list-disc">
            <li>To facilitate our Service;</li> <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <br />
          <p>
            I want to inform users of this Service that these third parties have access to their
            Personal Information. The reason is to perform the tasks assigned to them on our behalf.
            However, they are obligated not to disclose or use the information for any other
            purpose.
          </p>
          <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Security
          </h2>
          <p>
            I value your trust in providing us your Personal Information, thus we are striving to
            use commercially acceptable means of protecting it. However, please remember that no
            method of transmission over the internet, or method of electronic storage is 100% secure
            and reliable, and I cannot guarantee its absolute security.
          </p>
          <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Links to Other Sites
          </h2>
          <p>
            This Service may contain links to other sites. If you click on a third-party link, you
            will be directed to that site. Note that these external sites are not operated by me.
            Therefore, I strongly advise you to review the Privacy Policy of these websites. I have
            no control over and assume no responsibility for the content, privacy policies, or
            practices of any third-party sites or services.
          </p>
          <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Children's Privacy
          </h2>
          <div>
            <p>
              I do not knowingly collect personally identifiable information from children. I
              encourage all children to never submit any personally identifiable information through
              the Application and/or Services. I encourage parents and legal guardians to monitor
              their children's Internet usage and to help enforce this Policy by instructing their
              children never to provide personally identifiable information through the Application
              and/or Services without their permission. If you have reason to believe that a child
              has provided personally identifiable information to us through the Application and/or
              Services, please contact us. You must also be at least 16 years of age to consent to
              the processing of your personally identifiable information in your country (in some
              countries we may allow your parent or guardian to do so on your behalf).
            </p>
          </div>
          <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Changes to This Privacy Policy
          </h2>
          <p>
            I may update our Privacy Policy from time to time. Thus, you are advised to review this
            page periodically for any changes. I will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>
          <br />
          <p>This policy is effective as of 2022-08-01</p>
          <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Contact Us
          </h2>
          <p>
            If you have any questions or suggestions about my Privacy Policy, do not hesitate to
            contact me at <a href="mailto:ryan@ryantrent.com">ryan@ryantrent.com.</a>
          </p>
        </div>
      </div>
    </>
  )
}
