import ReactMarkdown from 'react-markdown'
import content from './TermsOfUse.md?raw'
import './Legal.css'

export default function TermsOfService() {
  return (
    <div className="legal-page">
      <ReactMarkdown>{content}</ReactMarkdown>
      <a className="legal-back-link" href="/">← Back to site</a>
    </div>
  )
}