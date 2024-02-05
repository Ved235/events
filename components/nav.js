import { ArrowLeft, Moon, GitHub } from 'react-feather'
import { Box, Container, IconButton, Image, Link as A } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavButton = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      color: 'primary',
      borderRadius: 'circle',
      transition: 'box-shadow .125s ease-in-out',
      ':hover,:focus': {
        boxShadow: '0 0 0 2px',
        outline: 'none'
      },
      ...sx
    }}
  />
)

const BackButton = ({ to = '/', text = 'All Events' }) => (
  <Link href={to} passHref>
    <NavButton
      as="a"
      title={to === '/' ? 'Back to homepage' : 'Back'}
      sx={{ display: 'flex', width: 'auto', pr: 2 }}
    >
      <ArrowLeft />
      {text}
    </NavButton>
  </Link>
)

const Flag = () => (
  <A
    href="https://questandromeda.org/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Quest Andromeda homepage"
    sx={{ mt: -3, lineHeight: 0 }}
  >
    <Image
      src="https://media.discordapp.net/attachments/1078317804148768849/1201611822940311643/Logo.png?ex=65ca7337&is=65b7fe37&hm=ff05c06af84fb51a3d61dd64d51e9fb8a7cdc36be631ed614e61dcd004b212ad&=&format=webp&quality=lossless&width=658&height=671"
      alt="Quest Andromeda flag"
      sx={{ width: [36, 48] , paddingTop: 10}}
    />
  </A>
)

const ColorSwitcher = props => {
  const [mode, setMode] = useColorMode()
  return (
    <NavButton
      {...props}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title="Reverse color scheme"
    >
      <Moon size={24} />
    </NavButton>
  )
}

export default () => {
  const [mode] = useColorMode()
  const router = useRouter()
  const home = router.pathname === '/'
  return (
    <Box
      as="nav"
      sx={{
        bg: 'sheet',
        color: 'nav',
        py: 3
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          a: {
            fontSize: 1,
            color: 'primary',
            textDecoration: 'none',
            mr: [3, 4]
          }
        }}
      >
        {!home ? <BackButton /> : <Flag />}
        <NavButton
          as="a"
          href=""
          aria-label="View source code on GitHub"
          sx={{ ml: 'auto' }}
        >
      
        </NavButton>
        <ColorSwitcher />
      </Container>
    </Box>
  )
}
