type SocialType =
  | 'github'
  | 'twitter'
  | 'instagram'
  | 'marcellable'
  | 'masiuciszek'

export const handleIcons = (socialPlatform: SocialType) => {
  switch (socialPlatform) {
    case 'github':
      return '🐼 Github'
    case 'instagram':
      return '📷 Instagram'
    case 'twitter':
      return '🐦 Twitter'
    case 'marcellable':
      return 'λ Blog'
    case 'masiuciszek':
      return '🐙 Porfolio'
    default:
      throw new Error('No matching type')
  }
}
