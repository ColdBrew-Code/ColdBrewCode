import ReactMarkdown from 'react-markdown'
import content from './TermsOfUse.md?raw'
import './Legal.css'

export default function TermsOfService() {
  return (
    <>
      <title>Terms of Service - Cold Brew Code</title>
      <meta name="description" content="Terms of Service. Read our terms and conditions governing your use of our site." />
      <meta property="og:title" content="Terms of Service - Cold Brew Code" />
      <div className="legal-page">
      <ReactMarkdown>{content}</ReactMarkdown>
      <a className="legal-back-link" href="/">← Back to site</a>
    </div>
    </>
  )
}