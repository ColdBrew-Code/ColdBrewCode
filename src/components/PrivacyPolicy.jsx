import ReactMarkdown from 'react-markdown'
import content from './PrivacyPolicy.md?raw'
import './Legal.css'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <ReactMarkdown>{content}</ReactMarkdown>
      <a className="legal-back-link" href="/">← Back to site</a>
    </div>
  )
}