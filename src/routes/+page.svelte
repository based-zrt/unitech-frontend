<script lang="ts">
    import { Button } from '$components/ui/button'
    import Centered from '$lib/Centered.svelte'

    import logo from '$lib/assets/icons/bordered/logo_slate-400.png'
    import embed from '$lib/assets/icons/borderless/logo_embed.png'
    import { MetaTags } from 'svelte-meta-tags'
</script>

<MetaTags
    title="unideb.tech"
    titleTemplate="%s | unideb.tech"
    description="The best image hosting service"
    canonical="https://unideb.tech"
    openGraph={{
        images: [
            {
                url: embed,
                width: 600,
                height: 600,
                alt: 'unideb.tech logo alt'
            }
        ],
        siteName: 'unideb.tech'
    }}
    twitter={{
        cardType: 'summary_large_image',
        site: '@unidebtech',
        title: 'unideb.tech',
        description: 'The best image hosting service',
        image: embed,
        imageAlt: 'unideb.tech logo'
    }}
    facebook={{
        appId: '1234567890'
    }}
/>

<Centered>
    <img class="w-48 lg:w-1/4" src={logo} alt="Logo" />
    <h1 class="text-4xl lg:text-8xl uppercase mt-10 mb-5 text-slate-300">unideb.tech</h1>
    <h2 class="text-l lg:text-4xl text-slate-300 mb-10">The Best Image hosting service</h2>
    <Button class="text-xl lg:text-4xl text-slate-400" href="/dash" variant="link">Dashboard</Button>
</Centered>
