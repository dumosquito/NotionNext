import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='font-bold text-gray-500 dark:text-gray-300'>
        Powered by Next.js & NotionNext {siteConfig('VERSION')}
      </span>
    </div>
  )
}
