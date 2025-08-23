import './DrivingTestInfo.css';

function DrivingTestInfo() {
    return (
        <div className="driving-test-info">
            <h1>Ohio Temporary Permit (Over Age 18)</h1>

            <section>
                <h2>Step 1: Knowledge Test & Vision Screening</h2>
                <ul>
                    <li>Take the test online at <a href="https://bmv.ohio.gov">Ohio BMV Online Services</a> or in person at a driver exam station.</li>
                    <li>40 multiple-choice questions (need 75% to pass).</li>
                    <li>Test available in multiple languages and formats (text, audio, ASL).</li>
                    <li>Must also pass a vision screening.</li>
                </ul>
                <p><strong>Tip:</strong> Study the <a href="https://www.bmv.ohio.gov/digest.aspx">Ohio Digest of Motor Vehicles</a> and try the sample practice test.</p>
            </section>

            <section>
                <h2>Step 2: What to Bring</h2>
                <ul>
                    <li>Proof of full legal name & date of birth</li>
                    <li>Social Security number (if assigned)</li>
                    <li>Proof of Ohio residency</li>
                    <li>Proof of U.S. citizenship or legal presence</li>
                </ul>
                <p><a href="https://www.bmv.ohio.gov/dl-id-documents.aspx">See full list of acceptable documents</a></p>
            </section>

            <section>
                <h2>Step 3: Purchasing Your TIPIC</h2>
                <ul>
                    <li>Must purchase within 60 days of passing the test.</li>
                    <li>Go to a deputy registrar license agency.</li>
                    <li>Bring your required documents and payment.</li>
                    <li>If under 18, a parent/guardian must co-sign.</li>
                </ul>
            </section>

            <section>
                <h2>TIPIC Rules for Adults</h2>
                <ul>
                    <li>You may practice driving only with a licensed driver age 21+ in the passenger seat.</li>
                </ul>
            </section>

            <section>
                <h2>Driving & Skills Test (Road Test)</h2>
                <p>
                    Once you feel confident and have met all requirements, you can schedule your road test online through <a href="https://bmv.ohio.gov">Ohio BMV Online Services</a>.
                </p>

                <h3>What to Bring</h3>
                <ul>
                    <li>Your valid TIPIC (temps)</li>
                    <li>If under 18 or on a limited-term TIPIC: completed <strong>Fifty-Hour Affidavit (BMV5791)</strong></li>
                    <li>A safe, roadworthy vehicle with valid insurance and registration</li>
                </ul>

                <h3>Test Parts</h3>
                <ul>
                    <li><strong>Driving Test:</strong> stop/start, turns, lane changes, signals, safe following distance</li>
                    <li><strong>Maneuverability Test:</strong> drive forward and back through a marked box without hitting cones</li>
                </ul>

                <h3>Scoring & Failure</h3>
                <ul>
                    <li>Deductions for hitting cones, poor stops, or not being parallel</li>
                    <li>Immediate failure if you run over or knock down a marker</li>
                    <li>If under 18: wait 2 days before retesting</li>
                    <li>If 18+: must complete an <strong>abbreviated adult driver training course</strong> before retesting</li>
                </ul>

                <h3>After You Pass</h3>
                <ul>
                    <li>Surrender your TIPIC</li>
                    <li>Purchase your driver license at a deputy registrar within 60 days</li>
                </ul>

                <p>
                    <strong>Note:</strong> ADA accommodations are available upon request. Contact the Ohio Department of Public Safety ADA Unit before your test.
                </p>
            </section>
        </div>
    );
}

export default DrivingTestInfo;
