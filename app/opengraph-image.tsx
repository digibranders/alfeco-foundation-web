import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const alt = 'Alfeco Foundation — Empowering Communities, Inspiring Change'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadLogoDataUrl(): Promise<string> {
  const logoPath = path.join(process.cwd(), 'public', 'assets', 'logo.png')
  const bytes = await readFile(logoPath)
  return `data:image/png;base64,${bytes.toString('base64')}`
}

export default async function OpenGraphImage() {
  const logo = await loadLogoDataUrl()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#EBF3F5',
          color: '#1A1A1A',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        {/* Decorative brand accents */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: 'rgba(72, 178, 169, 0.18)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'rgba(232, 171, 54, 0.18)',
          }}
        />

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            alt="Alfeco Foundation"
            width={280}
            height={104}
            style={{ display: 'block' }}
          />
        </div>

        {/* Headline block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: '#1A1A1A',
            }}
          >
            <div style={{ display: 'flex' }}>Empowering Communities.</div>
            <div style={{ display: 'flex', color: '#48B2A9' }}>
              Inspiring Change.
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              fontWeight: 500,
              color: '#4A4A4A',
              fontFamily: 'sans-serif',
            }}
          >
            Education · Food Security · Women &amp; Youth · Conservation
          </div>
        </div>

        {/* Footer brand bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#C1272D',
            }}
          >
            alfecofoundation.com
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: '#C1272D',
              }}
            />
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: '#E8AB36',
              }}
            />
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: '#48B2A9',
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
