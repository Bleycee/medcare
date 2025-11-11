
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Activity, FileText, Zap, Users, AlertCircle} from 'lucide-react';
import { Footer } from "../Footer";


export const LandingPage = () => {
  return (
    
      <>
      <Navbar />
      <Hero />
      
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    {/* Centered content container */}
    <div className="max-w-4xl mx-auto">
      
      {/* Text Content - Centered */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          THE CHALLENGE
        </h2>
        <h3 className="text-xl font-semibold text-cyan-600 mb-4">
          Healthcare Overcrowding Crisis
        </h3>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Patients with minor health concerns often show the severity of their symptoms, leading to overcrowding, long wait times and delayed care for those who need it most urgently.
        </p>

        {/* Stats Grid - 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-red-500 mb-2">70%</div>
            <p className="text-sm text-gray-600">Non-urgent cases in clinics</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-red-500 mb-2">4hr</div>
            <p className="text-sm text-gray-600">Average wait time</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-red-500 mb-2">30%</div>
            <p className="text-sm text-gray-600">Delayed urgent care</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-red-500 mb-2">25%</div>
            <p className="text-sm text-gray-600">Preventable emergencies</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
      </section>
      <section className="bg-red-50 py-16 px-6 md:px-12">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-8">
      Key issues identified
    </h2>

    <div className="space-y-6">
      {/* Issue 1 */}
      <div className="flex items-start gap-4">
        
         <AlertCircle className="text-red-500 w-10 h-10 mt-1" />
        <p className="text-gray-700 text-lg">
          <strong>Overcrowding by Non-Urgent Cases:</strong> Patients with minor
          health concerns occupy clinic resources, causing congestion and
          extended wait times.
        </p>
      </div>

      {/* Issue 2 */}
      <div className="flex items-start gap-4">
        <AlertCircle className="text-red-500 w-10 h-10 mt-1" />
        <p className="text-gray-700 text-lg">
          <strong>Delayed Care for Urgent Cases:</strong> Serious medical
          conditions experience delays as patients wait alongside less critical
          issues, risking deteriorating health.
        </p>
      </div>

      {/* Issue 3 */}
      <div className="flex items-start gap-4">
        
         <AlertCircle className="text-red-500 w-10 h-10 mt-1" />
        <p className="text-gray-700 text-lg">
          <strong>Lack of Case Management:</strong> Clinics lack effective
          systems to prioritize based on urgency, leading to long queues and
          preventable emergencies.
        </p>
      </div>
    </div>
  </div>
</section>
    <section className="py-16 bg-[#E9FAF5]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-500 mb-4">
            OUR SOLUTION
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Smart Triage for Smarter Healthcare. Medcare's intelligent triage system revolutionizes patient care by assessing symptoms before arrival, ensuring urgent cases get priority while optimizing clinic resources.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Smart Triage System</h3>
              <p className="text-gray-600 text-sm">AI-powered assessment evaluates patients based on symptom severity, reducing overcrowding and ensuring urgent cases get immediate attention.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Instant Prioritization</h3>
              <p className="text-gray-600 text-sm">Automated severity classification helps clinics manage patient flow efficiently, directing non-urgent cases to appropriate care levels.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Reduced Congestion</h3>
              <p className="text-gray-600 text-sm">By triaging before arrival, we distribute patient load across our network of facilities, minimizing clinic overcrowding.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Better Resource Allocation</h3>
              <p className="text-gray-600 text-sm">Pre-screening reduces wait times, keeps staff efficient, and improves patient satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Simple Process */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4">
            SIMPLE PROCESS
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            How Medcare Solves Overcrowding. Our four-steps process ensures you get the right care at the right time, while helping clinics manage patient flow efficiently.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Assess Your Symptoms</h3>
              <p className="text-gray-600">Use our smart triage system to evaluate your condition from home. Answer simple questions about your symptoms.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Get Priority Level</h3>
              <p className="text-gray-600">Receive an immediate assessment classifying your case as emergency, urgent, standard or routine care.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Skip the Queue</h3>
              <p className="text-gray-600">Pre-registered urgent cases get priority check in while routine cases can schedule convenient appointments.</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Find Right Facility</h3>
              <p className="text-gray-600">Get directed to the appropriate care level at the nearest available facility based on your priority.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
              Try Our Smart Triage Now →
            </button>
          </div>
        </div>
      </section>
      {/* Proven Results */}
      <section className="py-16 bg-blue-600 text-white">
       <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300 mb-4">
      PROVEN RESULTS
    </h2>
    <p className="text-center mb-12 max-w-2xl mx-auto">
      Making a Real Difference. Our smart triage system has transformed patient care across Nigeria, reducing overcrowding and improving health outcomes.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-blue-500 p-8 rounded-lg text-center">
        <div className="text-5xl font-bold mb-2">70%</div>
        <p className="text-lg">Reduction in wait times</p>
      </div>
      <div className="bg-blue-500 p-8 rounded-lg text-center">
        <div className="text-5xl font-bold mb-2">80%</div>
        <p className="text-lg">Urgent cases prioritized</p>
      </div>
      <div className="bg-blue-500 p-8 rounded-lg text-center">
        <div className="text-5xl font-bold mb-2">20+</div>
        <p className="text-lg">Patients triaged monthly</p>
      </div>
      <div className="bg-blue-500 p-8 rounded-lg text-center">
        <div className="text-5xl font-bold mb-2">95%</div>
        <p className="text-lg">Accuracy rate</p>
      </div>
    </div>
  </div>

  {/* Show only on mobile */}
  <div className="block sm:hidden mt-12">
    <div className=" rounded-2xl h-90 flex items-center justify-center">
      <img src="/images/Pix.png" alt="proven results" className="object-cover h-full" />
    </div>
  </div>
</section>

 {/* Privacy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-500 mb-4">
            YOUR PRIVACY MATTERS
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Secure, Confidential, Compliant
          </p>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We implement industry leading security measures to protect your personal health information. All data is encrypted in strict compliance with healthcare privacy standards.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-gray-700">Strict access controls and multi-factor authentication</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-gray-700">End-to-end encryption for all communications</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-gray-700">Regular security audits</p>
            </div>
          </div>
        </div>
      </section>

<Footer/>

      
      
      


      </>
      

      
      

      
    
  );
};
