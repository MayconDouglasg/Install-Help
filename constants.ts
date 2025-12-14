import { SoftwareItem, ProfileType, Language } from './types';
import { Monitor, Code, Gamepad2, Palette } from 'lucide-react';

export const TRANSLATIONS = {
  en: {
    title: 'Apps Selected',
    aiTitle: 'AI Assistant',
    aiPlaceholder: 'Describe needs (e.g. "Python dev tools")',
    presets: 'Quick Presets',
    categories: 'Categories',
    searchPlaceholder: 'Search for apps...',
    downloadButton: 'Get Installers',
    downloadSub: 'Download .exe/.msi files directly',
    exportButton: 'Export Config (.json)',
    modalTitle: 'Download Manager',
    modalDesc: 'Click the buttons below to download the official installers directly.',
    modalClose: 'Close',
    openPage: 'Open Page',
    downloadNow: 'Download',
    downloaded: 'Downloaded',
    aiInfoTitle: 'AI Insight',
    aiInfoLoading: 'Analyzing software...',
    close: 'Close',
    all: 'All',
    browsers: 'Browsers',
    dev: 'Development',
    gaming: 'Gaming',
    multimedia: 'Multimedia',
    creative: 'Creative',
    utilities: 'Utilities',
    drivers: 'Drivers',
    communication: 'Communication',
    productivity: 'Productivity',
    security: 'Security',
    profileGeneral: 'Home / Office',
    profileGaming: 'Gaming',
    profileDev: 'Programming',
    profileCreative: 'Content Creation'
  },
  pt: {
    title: 'Apps Selecionados',
    aiTitle: 'Assistente IA',
    aiPlaceholder: 'Descreva (ex: "Ferramentas Python")',
    presets: 'Perfis Rápidos',
    categories: 'Categorias',
    searchPlaceholder: 'Buscar aplicativos...',
    downloadButton: 'Obter Instaladores',
    downloadSub: 'Baixe os arquivos .exe/.msi diretamente',
    exportButton: 'Exportar Config (.json)',
    modalTitle: 'Gerenciador de Downloads',
    modalDesc: 'Clique nos botões abaixo para baixar os instaladores oficiais.',
    modalClose: 'Fechar',
    openPage: 'Abrir Site',
    downloadNow: 'Baixar',
    downloaded: 'Baixado',
    aiInfoTitle: 'Insight IA',
    aiInfoLoading: 'Analisando software...',
    close: 'Fechar',
    all: 'Todos',
    browsers: 'Navegadores',
    dev: 'Programação',
    gaming: 'Jogos',
    multimedia: 'Multimídia',
    creative: 'Criativo',
    utilities: 'Utilitários',
    drivers: 'Drivers',
    communication: 'Comunicação',
    productivity: 'Produtividade',
    security: 'Segurança',
    profileGeneral: 'Casa / Escritório',
    profileGaming: 'Gamer',
    profileDev: 'Desenvolvedor',
    profileCreative: 'Criação de Conteúdo'
  }
};

export const PROFILES: { id: ProfileType; labelKey: string; description: string; icon: any }[] = [
  { id: 'General', labelKey: 'profileGeneral', description: 'Essential tools for everyday web browsing and office work.', icon: Monitor },
  { id: 'Gaming', labelKey: 'profileGaming', description: 'Optimized for performance, game launchers, and communication.', icon: Gamepad2 },
  { id: 'Development', labelKey: 'profileDev', description: 'IDEs, runtimes, terminals, and virtualization tools.', icon: Code },
  { id: 'Creative', labelKey: 'profileCreative', description: 'Video editing, 3D modeling, and graphic design tools.', icon: Palette },
];

export const SOFTWARE_CATALOG: SoftwareItem[] = [
  // Productivity (Office & Notes)
  {
    id: 'Microsoft.Office',
    name: 'Microsoft 365',
    description: 'Word, Excel, PowerPoint & more.',
    category: 'Productivity',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg',
    website: 'https://www.office.com/',
    downloadUrl: 'https://c2rsetup.officeapps.live.com/c2r/download.aspx?ProductreleaseID=O365HomePremRetail&platform=x64&language=pt-br',
    popular: true
  },
  {
    id: 'TheDocumentFoundation.LibreOffice',
    name: 'LibreOffice',
    description: 'Free and open source office suite.',
    category: 'Productivity',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/42/LibreOffice_7.6_icon.svg',
    website: 'https://www.libreoffice.org/',
    downloadUrl: 'https://www.libreoffice.org/download/download-libreoffice/'
  },
  {
    id: 'Notion.Notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes & tasks.',
    category: 'Productivity',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    website: 'https://www.notion.so/',
    downloadUrl: 'https://www.notion.so/desktop/windows/download',
    popular: true
  },
  {
    id: 'Obsidian.Obsidian',
    name: 'Obsidian',
    description: 'Private and flexible writing app.',
    category: 'Productivity',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/10/2023_Obsidian_logo.svg',
    website: 'https://obsidian.md/',
    downloadUrl: 'https://obsidian.md/download'
  },
  {
    id: 'Adobe.Acrobat.Reader.64-bit',
    name: 'Adobe Acrobat Reader',
    description: 'View, sign, and annotate PDFs.',
    category: 'Productivity',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Adobe_Acrobat_DC_Icon.png',
    website: 'https://get.adobe.com/reader/',
    downloadUrl: 'https://get.adobe.com/reader/download/'
  },

  // Security
  {
    id: 'Malwarebytes.Malwarebytes',
    name: 'Malwarebytes',
    description: 'Advanced malware protection.',
    category: 'Security',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Malwarebytes_Anti-Malware_icon.svg',
    website: 'https://www.malwarebytes.com/',
    downloadUrl: 'https://downloads.malwarebytes.com/file/mb4_offline'
  },
  {
    id: 'Bitwarden.Bitwarden',
    name: 'Bitwarden',
    description: 'Secure open source password manager.',
    category: 'Security',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Bitwarden_logo_vertical_blue.svg',
    website: 'https://bitwarden.com/',
    downloadUrl: 'https://vault.bitwarden.com/download/?app=desktop&platform=windows'
  },

  // Browsers
  { 
    id: 'Google.Chrome', 
    name: 'Google Chrome', 
    description: 'Fast, secure browser.', 
    category: 'Browsers', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg', 
    website: 'https://www.google.com/chrome/',
    popular: true 
  },
  { 
    id: 'Mozilla.Firefox', 
    name: 'Firefox', 
    description: 'Privacy-focused web browser.', 
    category: 'Browsers', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg',
    website: 'https://www.mozilla.org/firefox/',
    downloadUrl: 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=pt-BR'
  },
  { 
    id: 'Brave.Brave', 
    name: 'Brave Browser', 
    description: 'Ad-blocking browser.', 
    category: 'Browsers', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Brave_lion_icon.png',
    website: 'https://brave.com/',
    downloadUrl: 'https://laptop-updates.brave.com/latest/winx64'
  },
  { 
    id: 'Microsoft.Edge', 
    name: 'Microsoft Edge', 
    description: 'The AI-powered browser.', 
    category: 'Browsers', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg',
    website: 'https://www.microsoft.com/edge' 
  },
  { 
    id: 'Opera.OperaGX', 
    name: 'Opera GX', 
    description: 'Browser built for gamers.', 
    category: 'Browsers', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Opera_GX_Logo.svg',
    website: 'https://www.opera.com/gx',
    downloadUrl: 'https://net.geo.opera.com/opera_gx/stable/windows?utm_tryagain=yes&utm_source=opera_com&utm_medium=ose&utm_campaign=(none)_via_opera_com'
  },

  // Development (Editors & IDEs)
  { 
    id: 'Microsoft.VisualStudioCode', 
    name: 'VS Code', 
    description: 'Code editor redefined.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', 
    website: 'https://code.visualstudio.com/',
    downloadUrl: 'https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user',
    popular: true 
  },
  { 
    id: 'Microsoft.VisualStudio.2022.Community', 
    name: 'Visual Studio 2022', 
    description: 'Comprehensive IDE for .NET/C++.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_2019_logo.svg',
    website: 'https://visualstudio.microsoft.com/',
    downloadUrl: 'https://c2rsetup.officeapps.live.com/c2r/downloadVS.aspx?sku=community&channel=Release&version=VS2022'
  },
  { 
    id: 'JetBrains.IntelliJIDEA.Community', 
    name: 'IntelliJ IDEA CE', 
    description: 'The Leading Java and Kotlin IDE.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg',
    website: 'https://www.jetbrains.com/idea/' 
  },
  { 
    id: 'JetBrains.PyCharm.Community', 
    name: 'PyCharm CE', 
    description: 'Python IDE for professional developers.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg',
    website: 'https://www.jetbrains.com/pycharm/' 
  },
  { 
    id: 'Google.AndroidStudio', 
    name: 'Android Studio', 
    description: 'IDE for Android development.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg',
    website: 'https://developer.android.com/studio' 
  },
  { 
    id: 'Notepad++.Notepad++', 
    name: 'Notepad++', 
    description: 'Fast, lightweight text editor.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Notepad%2B%2B_Logo.svg',
    website: 'https://notepad-plus-plus.org/' 
  },
  { 
    id: 'SublimeHQ.SublimeText.4', 
    name: 'Sublime Text', 
    description: 'Sophisticated text editor for code.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Sublime_Text_Logo.svg',
    website: 'https://www.sublimetext.com/',
    downloadUrl: 'https://download.sublimetext.com/Sublime%20Text%20Build%204169%20x64%20setup.exe'
  },
  { 
    id: 'Neovim.Neovim', 
    name: 'Neovim', 
    description: 'Hyperextensible Vim-based text editor.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Neovim-mark.svg',
    website: 'https://neovim.io/' 
  },

  // Development (Runtimes, SDKs & Languages)
  { 
    id: 'OpenJS.NodeJS.LTS', 
    name: 'Node.js (LTS)', 
    description: 'JavaScript runtime built on Chrome\'s V8.', 
    category: 'Development', 
    icon: 'https://nodejs.org/static/images/logo.svg',
    website: 'https://nodejs.org/' 
  },
  { 
    id: 'Python.Python.3', 
    name: 'Python 3', 
    description: 'Powerful programming language.', 
    category: 'Development', 
    icon: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png',
    website: 'https://www.python.org/',
    downloadUrl: 'https://www.python.org/ftp/python/3.12.2/python-3.12.2-amd64.exe'
  },
  { 
    id: 'Golang.Go', 
    name: 'Go (Golang)', 
    description: 'Google\'s open source language.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
    website: 'https://go.dev/' 
  },
  { 
    id: 'Rustlang.Rustup', 
    name: 'Rust (Rustup)', 
    description: 'Systems programming language.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg',
    website: 'https://www.rust-lang.org/',
    downloadUrl: 'https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe'
  },
  { 
    id: 'EclipseAdoptium.Temurin.17', 
    name: 'Java JDK 17', 
    description: 'OpenJDK runtime (LTS).', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Java_programming_language_logo.svg',
    website: 'https://adoptium.net/' 
  },
  { 
    id: 'Microsoft.DotNet.SDK.8', 
    name: '.NET 8 SDK', 
    description: 'Developer platform for building apps.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
    website: 'https://dotnet.microsoft.com/' 
  },
  { 
    id: 'Flutter.Flutter', 
    name: 'Flutter SDK', 
    description: 'UI toolkit for building beautiful apps.', 
    category: 'Development', 
    icon: 'https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png',
    website: 'https://flutter.dev/' 
  },
  { 
    id: 'Kitware.CMake', 
    name: 'CMake', 
    description: 'Cross-platform build system.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Cmake.svg',
    website: 'https://cmake.org/' 
  },

  // Development (Tools, Containers, Cloud & API)
  { 
    id: 'Git.Git', 
    name: 'Git', 
    description: 'Distributed version control.', 
    category: 'Development', 
    icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    website: 'https://git-scm.com/',
    downloadUrl: 'https://git-scm.com/download/win'
  },
  {
    id: 'Axosoft.GitKraken',
    name: 'GitKraken',
    description: 'Legendary Git GUI client.',
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/GitKraken_logo_2024.svg',
    website: 'https://www.gitkraken.com/',
    downloadUrl: 'https://release.gitkraken.com/win64/GitKrakenSetup.exe'
  },
  { 
    id: 'Docker.DockerDesktop', 
    name: 'Docker Desktop', 
    description: 'Containerization platform.', 
    category: 'Development', 
    icon: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
    website: 'https://www.docker.com/',
    downloadUrl: 'https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe'
  },
  { 
    id: 'Kubernetes.kubectl', 
    name: 'Kubernetes CLI', 
    description: 'Command line tool for Kubernetes.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
    website: 'https://kubernetes.io/docs/reference/kubectl/' 
  },
  { 
    id: 'Postman.Postman', 
    name: 'Postman', 
    description: 'API platform for building and using APIs.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png',
    website: 'https://www.postman.com/',
    downloadUrl: 'https://dl.pstmn.io/download/latest/win64'
  },
  { 
    id: 'Kong.Insomnia', 
    name: 'Insomnia', 
    description: 'Open source API client.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Insomnia_logo.svg',
    website: 'https://insomnia.rest/',
    downloadUrl: 'https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.app&source=website'
  },
  { 
    id: 'dbeaver.dbeaver', 
    name: 'DBeaver', 
    description: 'Universal Database Tool.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/DBeaver_logo.svg',
    website: 'https://dbeaver.io/',
    downloadUrl: 'https://dbeaver.io/files/dbeaver-ce-latest-x86_64-setup.exe'
  },
  { 
    id: 'MongoDB.Compass.Community', 
    name: 'MongoDB Compass', 
    description: 'GUI for MongoDB.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg',
    website: 'https://www.mongodb.com/products/tools/compass' 
  },
  { 
    id: 'PostgreSQL.pgAdmin', 
    name: 'pgAdmin 4', 
    description: 'PostgreSQL management tool.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    website: 'https://www.pgadmin.org/' 
  },
  { 
    id: 'Microsoft.WindowsTerminal', 
    name: 'Windows Terminal', 
    description: 'Modern command line terminal.', 
    category: 'Development', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Windows_Terminal_logo.svg',
    website: 'https://github.com/microsoft/terminal',
    downloadUrl: 'https://github.com/microsoft/terminal/releases/latest'
  },
  {
    id: 'Oracle.VirtualBox',
    name: 'VirtualBox',
    description: 'x86 virtualization software.',
    category: 'Development',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png',
    website: 'https://www.virtualbox.org/'
  },
  {
    id: 'Amazon.AWSCLI',
    name: 'AWS CLI',
    description: 'Command line for AWS.',
    category: 'Development',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    website: 'https://aws.amazon.com/cli/',
    downloadUrl: 'https://awscli.amazonaws.com/AWSCLIV2.msi'
  },
  {
    id: 'Google.CloudSDK',
    name: 'Google Cloud SDK',
    description: 'CLI for Google Cloud Platform.',
    category: 'Development',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    website: 'https://cloud.google.com/sdk',
    downloadUrl: 'https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe'
  },
  {
    id: 'WiresharkFoundation.Wireshark',
    name: 'Wireshark',
    description: 'Network protocol analyzer.',
    category: 'Development',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Wireshark_Icon.png',
    website: 'https://www.wireshark.org/'
  },
  
  // Gaming
  { 
    id: 'Valve.Steam', 
    name: 'Steam', 
    description: 'The ultimate gaming platform.', 
    category: 'Gaming', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', 
    website: 'https://store.steampowered.com/',
    downloadUrl: 'https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe',
    popular: true 
  },
  { 
    id: 'EpicGames.EpicGamesLauncher', 
    name: 'Epic Games', 
    description: 'Game store and launcher.', 
    category: 'Gaming', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg',
    website: 'https://store.epicgames.com/',
    downloadUrl: 'https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi'
  },
  { 
    id: 'GOG.Galaxy', 
    name: 'GOG Galaxy', 
    description: 'DRM-free games launcher.', 
    category: 'Gaming', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/22/GOG_Galaxy_logo.png',
    website: 'https://www.gog.com/galaxy',
    downloadUrl: 'https://webinstallers.gog-statics.com/download/GOG_Galaxy_2.0.exe'
  },
  { 
    id: 'Ubisoft.Connect', 
    name: 'Ubisoft Connect', 
    description: 'Ecosystem of player services.', 
    category: 'Gaming', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg',
    website: 'https://ubisoftconnect.com/',
    downloadUrl: 'https://ubi.li/4vxt9'
  },
  
  // Communication
  { 
    id: 'Discord.Discord', 
    name: 'Discord', 
    description: 'Talk, chat, and hang out.', 
    category: 'Communication', 
    icon: 'https://assets-global.website-files.com/6257adef93867e56f84d3092/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png', 
    website: 'https://discord.com/',
    downloadUrl: 'https://discord.com/api/download?platform=win',
    popular: true 
  },
  { 
    id: 'SlackTechnologies.Slack', 
    name: 'Slack', 
    description: 'Business communication platform.', 
    category: 'Communication', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    website: 'https://slack.com/',
    downloadUrl: 'https://slack.com/ssb/download-win64'
  },
  { 
    id: 'Telegram.TelegramDesktop', 
    name: 'Telegram', 
    description: 'Cloud-based messaging.', 
    category: 'Communication', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
    website: 'https://desktop.telegram.org/',
    downloadUrl: 'https://telegram.org/dl/desktop/win64'
  },
  { 
    id: 'Zoom.Zoom', 
    name: 'Zoom', 
    description: 'Video conferencing.', 
    category: 'Communication', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg',
    website: 'https://zoom.us/',
    downloadUrl: 'https://zoom.us/client/latest/ZoomInstaller.exe'
  },

  // Multimedia
  { 
    id: 'VideoLAN.VLC', 
    name: 'VLC Media Player', 
    description: 'Plays almost everything.', 
    category: 'Multimedia', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/VLC_Icon.svg', 
    website: 'https://www.videolan.org/',
    downloadUrl: 'https://get.videolan.org/vlc/last/win64/vlc-3.0.20-win64.exe',
    popular: true 
  },
  { 
    id: 'Spotify.Spotify', 
    name: 'Spotify', 
    description: 'Music streaming.', 
    category: 'Multimedia', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    website: 'https://www.spotify.com/',
    downloadUrl: 'https://download.scdn.co/SpotifySetup.exe'
  },
  { 
    id: 'K-Lite.CodecPack.Full', 
    name: 'K-Lite Codec Pack', 
    description: 'DirectShow filters for video/audio.', 
    category: 'Multimedia', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/36/K-Lite_Codec_Pack_Logo.png',
    website: 'https://codecguide.com/' 
  },
  
  // Creative
  { 
    id: 'Adobe.CreativeCloud', 
    name: 'Adobe Creative Cloud', 
    description: 'Access to all Adobe apps.', 
    category: 'Creative', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_Rainbow_icon.svg', 
    website: 'https://www.adobe.com/creativecloud.html',
    downloadUrl: 'https://creativecloud.adobe.com/apps/download/creative-cloud'
  },
  {
    id: 'Figma.Figma',
    name: 'Figma',
    description: 'Collaborative interface design.',
    category: 'Creative', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    website: 'https://www.figma.com/',
    downloadUrl: 'https://www.figma.com/download/desktop/win',
    popular: true
  },
  {
    id: 'DominikLevitsky.FontBase',
    name: 'FontBase',
    description: 'Beautiful font manager.',
    category: 'Creative',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/FontBase_logo.svg',
    website: 'https://fontba.se/',
    downloadUrl: 'https://releases.fontba.se/win/FontBase-2.20.2.exe'
  },
  { 
    id: 'BlenderFoundation.Blender', 
    name: 'Blender', 
    description: '3D creation suite.', 
    category: 'Creative', 
    icon: 'https://download.blender.org/branding/community/blender_community_badge_white.svg',
    website: 'https://www.blender.org/' 
  },
  { 
    id: 'GIMP.GIMP', 
    name: 'GIMP', 
    description: 'Image manipulation program.', 
    category: 'Creative', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/The_GIMP_icon_-_gnome.svg',
    website: 'https://www.gimp.org/',
    downloadUrl: 'https://download.gimp.org/gimp/v2.10/windows/gimp-2.10.36-setup.exe'
  },
  { 
    id: 'Inkscape.Inkscape', 
    name: 'Inkscape', 
    description: 'Vector graphics editor.', 
    category: 'Creative', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Inkscape_Logo.svg',
    website: 'https://inkscape.org/',
    downloadUrl: 'https://inkscape.org/release/inkscape-1.3.2/windows/64-bit/msi/dl/'
  },
  { 
    id: 'Krita.Krita', 
    name: 'Krita', 
    description: 'Digital painting & animation.', 
    category: 'Creative', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Calligrakrita-base.svg',
    website: 'https://krita.org/',
    downloadUrl: 'https://download.kde.org/stable/krita/5.2.2/krita-x64-5.2.2-setup.exe'
  },
  { 
    id: 'dotPDN.PaintDotNet', 
    name: 'Paint.NET', 
    description: 'Image and photo editing.', 
    category: 'Creative', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Paint.NET_icon.png',
    website: 'https://www.getpaint.net/' 
  },
  { 
    id: 'OBSProject.OBSStudio', 
    name: 'OBS Studio', 
    description: 'Broadcasting software.', 
    category: 'Creative', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Obs.svg',
    website: 'https://obsproject.com/',
    downloadUrl: 'https://cdn-fastly.obsproject.com/downloads/OBS-Studio-30.0.2-Full-Installer-x64.exe'
  },
  { 
    id: 'Audacity.Audacity', 
    name: 'Audacity', 
    description: 'Audio editor and recorder.', 
    category: 'Creative', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Audacity_Logo_question.svg',
    website: 'https://www.audacityteam.org/' 
  },
  { 
    id: 'HandBrake.HandBrake', 
    name: 'HandBrake', 
    description: 'Open source video transcoder.', 
    category: 'Creative', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/23/HandBrake_Icon.png',
    website: 'https://handbrake.fr/' 
  },

  // Utilities & Drivers
  { 
    id: '7zip.7zip', 
    name: '7-Zip', 
    description: 'File archiver.', 
    category: 'Utilities', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/70/7-Zip_logo_3.svg',
    website: 'https://www.7-zip.org/',
    downloadUrl: 'https://www.7-zip.org/a/7z2301-x64.exe'
  },
  {
    id: 'Microsoft.VCRedist.2015+.x64',
    name: 'Visual C++ 2015-2022',
    description: 'Essential runtime for games/apps.',
    category: 'Utilities',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Visual_Studio_2013_Logo.svg',
    website: 'https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist',
    downloadUrl: 'https://aka.ms/vs/17/release/vc_redist.x64.exe',
    popular: true
  },
  {
    id: 'Microsoft.VCRedist.2010.x64',
    name: 'Visual C++ 2010',
    description: 'Redistributable package (x64).',
    category: 'Utilities',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Visual_Studio_2013_Logo.svg',
    website: 'https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist',
    downloadUrl: 'https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x64.exe'
  },
  {
    id: 'Microsoft.VCRedist.2012.x64',
    name: 'Visual C++ 2012',
    description: 'Redistributable package (x64).',
    category: 'Utilities',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Visual_Studio_2013_Logo.svg',
    website: 'https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist',
    downloadUrl: 'https://download.microsoft.com/download/1/6/B/16B06F60-3B20-4FF2-B699-5E9B7962F9AE/VSU_4/vcredist_x64.exe'
  },
  {
    id: 'Microsoft.VCRedist.2013.x64',
    name: 'Visual C++ 2013',
    description: 'Redistributable package (x64).',
    category: 'Utilities',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Visual_Studio_2013_Logo.svg',
    website: 'https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist',
    downloadUrl: 'https://aka.ms/highdpimfc2013x64enu'
  },
  {
    id: 'Microsoft.DotNet.DesktopRuntime.8',
    name: '.NET Desktop Runtime 8',
    description: 'Run Windows desktop apps.',
    category: 'Utilities',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
    website: 'https://dotnet.microsoft.com/download/dotnet/8.0'
  },
  {
    id: 'Microsoft.DotNet.DesktopRuntime.6',
    name: '.NET Desktop Runtime 6',
    description: 'Run older Windows desktop apps.',
    category: 'Utilities',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
    website: 'https://dotnet.microsoft.com/download/dotnet/6.0'
  },
  { 
    id: 'Microsoft.PowerToys', 
    name: 'PowerToys', 
    description: 'System utilities for power users.', 
    category: 'Utilities', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/PowerToys_icon.svg',
    website: 'https://learn.microsoft.com/en-us/windows/powertoys/',
    downloadUrl: 'https://github.com/microsoft/PowerToys/releases/latest',
    popular: true
  },
  { 
    id: 'Voidtools.Everything', 
    name: 'Everything', 
    description: 'Locate files and folders instantly.', 
    category: 'Utilities', 
    icon: 'https://www.voidtools.com/Everything.png',
    website: 'https://www.voidtools.com/',
    downloadUrl: 'https://www.voidtools.com/Everything-1.4.1.1024.x64-Setup.exe'
  },
  { 
    id: 'AntibodySoftware.WizTree', 
    name: 'WizTree', 
    description: 'Fast disk space analyzer.', 
    category: 'Utilities', 
    icon: 'https://diskanalyzer.com/assets/img/logo_small.png',
    website: 'https://diskanalyzer.com/',
    downloadUrl: 'https://diskanalyzer.com/files/wiztree_4_16_setup.exe'
  },
  { 
    id: 'ShareX.ShareX', 
    name: 'ShareX', 
    description: 'Screen capture & file sharing.', 
    category: 'Utilities', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/db/ShareX_Logo.svg',
    website: 'https://getsharex.com/',
    downloadUrl: 'https://github.com/ShareX/ShareX/releases/latest/download/ShareX-setup.exe'
  },
  { 
    id: 'Rufus.Rufus', 
    name: 'Rufus', 
    description: 'Create bootable USB drives.', 
    category: 'Utilities', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Rufus_logo.svg',
    website: 'https://rufus.ie/',
    downloadUrl: 'https://github.com/pbatard/rufus/releases/latest/download/rufus-4.4.exe'
  },
  { 
    id: 'AMD.ChipsetSoftware', 
    name: 'AMD Chipset Drivers', 
    description: 'Essential drivers for AMD Ryzen motherboards.', 
    category: 'Drivers', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/AMD_Logo.svg', 
    website: 'https://www.amd.com/en/support' 
  },
  { 
    id: 'Nvidia.GeForceExperience', 
    name: 'GeForce Experience', 
    description: 'Nvidia drivers & tools.', 
    category: 'Drivers', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg', 
    website: 'https://www.nvidia.com/en-us/geforce/geforce-experience/',
    popular: true 
  },
  { 
    id: 'AMD.RadeonSoftware', 
    name: 'AMD Adrenalin', 
    description: 'AMD drivers & tools.', 
    category: 'Drivers', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/AMD_Logo.svg',
    website: 'https://www.amd.com/en/technologies/software' 
  },
  { 
    id: 'Logitech.GHUB', 
    name: 'Logitech G HUB', 
    description: 'Logitech G gaming software.', 
    category: 'Drivers', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Logitech_G_logo.svg',
    website: 'https://www.logitechg.com/en-us/innovation/g-hub.html' 
  },
  { 
    id: 'Razer.Synapse', 
    name: 'Razer Synapse', 
    description: 'Razer hardware configuration.', 
    category: 'Drivers', 
    icon: 'https://upload.wikimedia.org/wikipedia/en/2/22/Razer_Inc._logo.svg',
    website: 'https://www.razer.com/synapse-3' 
  },
];

export const PROFILE_DEFAULTS: Record<ProfileType, string[]> = {
  'General': [
    'Google.Chrome', 
    'VideoLAN.VLC', 
    'Spotify.Spotify', 
    '7zip.7zip', 
    'Microsoft.PowerToys', 
    'ShareX.ShareX', 
    'Notion.Notion',
    'Microsoft.Office',
    'Adobe.Acrobat.Reader.64-bit',
    'Microsoft.VCRedist.2015+.x64',
    'Microsoft.DotNet.DesktopRuntime.8'
  ],
  'Gaming': [
    'Google.Chrome', 
    'Valve.Steam', 
    'Discord.Discord', 
    'Nvidia.GeForceExperience', 
    'Opera.OperaGX',
    'Microsoft.VCRedist.2015+.x64',
    'Microsoft.VCRedist.2013.x64',
    'Microsoft.VCRedist.2012.x64',
    'Microsoft.VCRedist.2010.x64'
  ],
  'Development': [
    'Google.Chrome', 
    'Microsoft.VisualStudioCode', 
    'Git.Git', 
    'OpenJS.NodeJS.LTS', 
    'Docker.DockerDesktop', 
    'Microsoft.WindowsTerminal', 
    'Postman.Postman', 
    'Microsoft.PowerToys',
    'Python.Python.3',
    'Notion.Notion',
    'Microsoft.DotNet.DesktopRuntime.8',
    'Microsoft.DotNet.DesktopRuntime.6'
  ],
  'Creative': [
    'Google.Chrome', 
    'Adobe.CreativeCloud',
    'Figma.Figma',
    'DominikLevitsky.FontBase',
    'BlenderFoundation.Blender', 
    'OBSProject.OBSStudio', 
    'HandBrake.HandBrake',
    'Notion.Notion'
  ]
};