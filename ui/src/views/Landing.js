import React from 'react'
import { Grid } from '@material-ui/core'
import Logo from './logo.png'

const Landing = () => {
  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      style={{
        textAlign: 'center',
        backgroundColor: '#F9F9F9',
        height: '90vh',
      }}
    >
      <Grid item xs={6}>
        <img src={Logo} style={{ width: 300 }} />
      </Grid>
      <Grid item xs={6} style={{ padding: 130, fontSize: 22 }}>
        WeCare is a unique story sharing social media catered towards sexually
        assaulted women and people suffering from depression. We want you to be
        in good state of mental health, and researches show sharing your story
        helps. So, always remember... We Care.
      </Grid>
    </Grid>
  )
}

export default Landing
