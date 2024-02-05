import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <title>Quest Andromeda Events</title>
        <link rel='icon' href='https://media.discordapp.net/attachments/1078317804148768849/1201611822940311643/Logo.png?ex=65ca7337&is=65b7fe37&hm=ff05c06af84fb51a3d61dd64d51e9fb8a7cdc36be631ed614e61dcd004b212ad&=&format=webp&quality=lossless&width=658&height=671' />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
