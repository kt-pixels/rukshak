import React from "react";
import {useClick} from '../Context/AllAPIs'

function Terms() {
  const {font} = useClick()
  return (
    <div className="donate-rakshak">
      <div className="background">
        <h2>Terms and Conditions</h2>
      </div>
      <div className="main-content-container">
        <div className="content">
          <h3>Acceptance of Terms</h3>
          <p style={{fontSize: `${font}px`}}>
          By accessing or using the Rakshak Institute website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access or use our services.
          </p>
        </div>
        <div className="content">
          <h3>Use of Services</h3>
          <p style={{fontSize: `${font}px`}}>
          You may use our services for lawful purposes only. You agree not to engage in any activity that violates applicable laws or infringes on the rights of others.
          </p>
        </div>
        <div className="content">
          <h3>Intellectual Property</h3>
          <p style={{fontSize: `${font}px`}}>
          All content, logos, trademarks, and other intellectual property on the Rakshak Institute website are the property of Rakshak Institute or its licensors and are protected by copyright and other intellectual property laws. You may not use, modify, reproduce, or distribute any content from our website without prior written consent.
          </p>
        </div>
        <div className="content">
          <h3>User Accounts</h3>
          <p style={{fontSize: `${font}px`}}>
          You may be required to create an account to access certain features of our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
        </div>
        <div className="content">
          <h3>Limitation of Liability</h3>
          <p style={{fontSize: `${font}px`}}>
          Rakshak Institute shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use our services.
          </p>
        </div>
        <div className="content">
          <h3> Governing Law</h3>
          <p style={{fontSize: `${font}px`}}>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of these terms shall be resolved through arbitration in [Jurisdiction].
          </p>
        </div>
        <div className="content">
          <h3>Changes to Terms</h3>
          <p style={{fontSize: `${font}px`}}>
          Rakshak Institute reserves the right to update or modify these Terms and Conditions at any time without prior notice. By continuing to use our services after any changes, you agree to be bound by the revised terms.
          </p>
        </div>
        <div className="content">
          <h3>Contact Us</h3>
          <p style={{fontSize: `${font}px`}}>
          If you have any questions or concerns about our Terms and Conditions, please contact us at [contact email/phone number].
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
