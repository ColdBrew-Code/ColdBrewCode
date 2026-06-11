import ReactMarkdown from 'react-markdown'
import content from './PrivacyPolicy.md?raw'
import './Legal.css'

export default function PrivacyPolicy() {
  return (
    <>
      <title>Privacy Policy - Cold Brew Code</title>
      <meta name="description" content="Privacy Policy. Learn how we collect, use, and protect your personal information." />
      <meta property="og:title" content="Privacy Policy - Cold Brew Code" />
      <div className="legal-page">
      <ReactMarkdown>{content}</ReactMarkdown>
      <a className="legal-back-link" href="/">← Back to site</a>
    </div>
    </>
  )
}