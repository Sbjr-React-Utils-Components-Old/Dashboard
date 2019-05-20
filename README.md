# Sbjr-React-Utils-Components - Dashboard

**React Dashboard Component.**

## Install

**CDN :**
```js
<script type="text/javascript" src="https://unpkg.com/@sbjr-react-utils-components/dashboard@latest"></script>
```

**npm :**
```bash
npm i -S @sbjr-react-utils-components/dashboard
```
## Usage

```js
import React from 'react';
import { render } from 'react-dom';
import Dashboard from '@sbjr-react-utils-components/dashboard';

render(
  (
    <div>
      <Dashboard
        cards={[
          {
            title: 'Card Title',
          },
          {
            title: 'Card Title',
            bottomRightComponent: (<p>Hello <strong>World</strong></p>)
          },
          {
            title: 'Card Title',
            disabled: true,
            bottomLeftComponent: (<p>Hello <strong>World</strong></p>)
          },
        ]}
        onClick={(card) => {
          console.log(card);
        }}
      />
    </div>
  ),
  document.getElementById('react-container'),
);
```

**Have fun.**
