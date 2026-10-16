import type React from "react";

export default function ServiceAreas({ city }: { city?: string }) {
  return (
    <>
<section className="band bg-off on-light" id="areas">
  <div className="wrap areas">
    <div className="left">
      <div className="eyebrow">Service areas</div>
      <h2 className="h2">Building across <em>the South Sound.</em></h2>
      <p>Based in Lacey, serving Thurston, Pierce, south King, Lewis and Mason counties.</p>
      <div className="tags" id="cityTags"><button type="button" data-city="Olympia">Olympia</button><button type="button" data-city="Lacey">Lacey</button><button type="button" data-city="Tumwater">Tumwater</button><button type="button" data-city="Tacoma">Tacoma</button><button type="button" data-city="Puyallup">Puyallup</button><button type="button" data-city="Lakewood">Lakewood</button><button type="button" data-city="University Place">University Place</button><button type="button" data-city="Gig Harbor">Gig Harbor</button><button type="button" data-city="Federal Way">Federal Way</button><button type="button" data-city="Auburn">Auburn</button><button type="button" data-city="Bonney Lake">Bonney Lake</button><button type="button" data-city="Spanaway">Spanaway</button><button type="button" data-city="Steilacoom">Steilacoom</button><button type="button" data-city="Centralia">Centralia</button><button type="button" data-city="Chehalis">Chehalis</button><button type="button" data-city="DuPont">DuPont</button><button type="button" data-city="Graham">Graham</button><button type="button" data-city="Yelm">Yelm</button><button type="button" data-city="Shelton">Shelton</button><button type="button" data-city="Fife">Fife</button></div>
    </div>
    <div className="map" id="areaMap" data-city={city}>
      <svg viewBox="0 0 600 700" id="gmap" role="img" aria-label="Map of the South Sound cities we serve">
<defs><filter id="pinsh" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="1.5" stdDeviation="1.4" floodOpacity=".35" /></filter></defs>
<g id="gview">
<rect x="-600" y="-640" width="1800" height="1920" fill="#F2EFE9" />
<path className="park" d="M316.1,228.0 C327.7,222.7 344.7,240.7 359.0,240.0 C373.3,239.4 392.0,221.4 401.8,224.0 C411.6,226.7 417.0,238.7 417.9,256.0 C418.8,273.4 417.9,308.0 407.2,328.0 C396.5,348.0 371.5,373.4 353.6,376.0 C335.8,378.7 310.8,361.4 300.0,344.0 C289.3,326.7 286.7,291.4 289.3,272.0 C292.0,252.7 304.5,233.4 316.1,228.0Z" />
<path className="park" d="M10.8,256.0 C24.2,234.7 71.5,236.0 85.8,248.0 C100.0,260.0 101.8,302.7 96.5,328.0 C91.1,353.4 68.8,392.0 53.6,400.0 C38.4,408.0 12.6,400.0 5.4,376.0 C-1.7,352.0 -2.6,277.4 10.8,256.0Z" />
<path className="park" d="M259.9,262.4 C255.8,259.4 255.8,245.4 259.9,241.6 C263.9,237.9 280.0,237.0 284.0,240.0 C288.0,243.1 288.0,256.3 284.0,260.0 C280.0,263.8 263.9,265.5 259.9,262.4Z" />
<path className="park" d="M367.0,80.0 C365.7,77.8 369.7,69.4 372.4,68.0 C375.0,66.7 381.7,69.8 383.1,72.0 C384.4,74.3 383.1,80.3 380.4,81.6 C377.7,83.0 368.3,82.3 367.0,80.0Z" />
<path className="park" d="M155.4,296.0 C155.4,294.7 159.2,292.0 160.8,292.0 C162.4,292.0 165.0,294.7 165.0,296.0 C165.0,297.4 162.4,300.0 160.8,300.0 C159.2,300.0 155.4,297.4 155.4,296.0Z" />
<g className="water">
<path d="M420.6,116.0 C425.0,117.0 433.1,110.3 436.6,105.6 C440.2,101.0 444.2,93.6 442.0,88.0 C439.8,82.4 430.0,73.4 423.3,72.0 C416.6,70.7 404.1,75.4 401.8,80.0 C399.6,84.7 406.7,94.0 409.9,100.0 C413.0,106.0 416.1,115.1 420.6,116.0Z" />
<path d="M345.6,224.0 C345.1,220.7 350.9,210.0 353.6,208.0 C356.3,206.0 361.2,208.7 361.6,212.0 C362.1,215.4 359.0,226.0 356.3,228.0 C353.6,230.0 346.0,227.4 345.6,224.0Z" />
<path d="M546.5,148.0 C544.7,144.7 550.5,127.4 554.5,124.0 C558.5,120.7 568.8,124.7 570.6,128.0 C572.4,131.4 569.2,140.7 565.2,144.0 C561.2,147.4 548.3,151.4 546.5,148.0Z" />
<path d="M128.6,328.0 C127.5,325.4 129.5,317.4 131.3,316.0 C133.1,314.7 138.2,317.4 139.3,320.0 C140.5,322.7 140.0,330.7 138.3,332.0 C136.5,333.4 129.8,330.7 128.6,328.0Z" />
<path d="M235.8,316.0 C235.1,312.0 237.1,299.1 238.4,296.0 C239.8,293.0 243.2,293.6 243.8,297.6 C244.4,301.6 243.5,317.0 242.2,320.0 C240.8,323.1 236.4,320.0 235.8,316.0Z" />
<path d="M439.3,500.0 C442.9,494.0 467.0,475.4 476.8,472.0 C486.6,468.7 495.6,477.4 498.3,480.0 C500.9,482.7 500.0,483.4 492.9,488.0 C485.8,492.7 464.3,506.0 455.4,508.0 C446.5,510.0 435.8,506.0 439.3,500.0Z" />
</g><g className="wline">
<path strokeWidth="11" d="M169.9,283.2 C169.1,277.4 165.2,260.6 165.0,248.0 C164.9,235.5 167.7,218.0 168.8,208.0 C169.9,198.0 171.0,191.4 171.5,188.0" />
<path strokeWidth="9" d="M138.3,272.0 C139.3,266.7 141.7,252.0 144.7,240.0 C147.7,228.0 153.4,209.4 156.5,200.0 C159.6,190.7 162.3,186.7 163.4,184.0" />
<path strokeWidth="10" d="M85.8,272.0 C89.8,266.7 101.8,250.7 109.9,240.0 C117.9,229.4 126.4,217.4 134.0,208.0 C141.6,198.7 151.8,188.0 155.4,184.0" />
<path strokeWidth="5" d="M150.0,164.0 C144.7,163.4 128.6,161.4 117.9,160.0 C107.2,158.7 94.2,157.6 85.8,156.0 C77.3,154.4 70.1,151.4 67.0,150.4" />
<path strokeWidth="12" d="M65.4,156.0 C67.0,151.4 70.8,137.4 75.0,128.0 C79.3,118.7 88.4,104.7 91.1,100.0" />
<path strokeWidth="10" d="M206.3,252.0 C206.7,247.4 208.1,234.7 209.0,224.0 C209.9,213.4 211.2,194.0 211.7,188.0" />
<path strokeWidth="32" d="M155.4,180.0 C161.7,180.7 181.3,180.7 192.9,184.0 C204.5,187.4 214.3,194.0 225.0,200.0 C235.8,206.0 248.3,215.4 257.2,220.0 C266.1,224.7 271.5,230.0 278.6,228.0 C285.8,226.0 293.3,215.4 300.0,208.0 C306.7,200.7 315.7,188.0 318.8,184.0" />
<path strokeWidth="17" d="M321.5,184.0 C324.6,178.7 335.3,162.7 340.2,152.0 C345.1,141.4 347.8,130.7 350.9,120.0 C354.1,109.4 356.7,96.0 359.0,88.0 C361.2,80.0 363.4,74.7 364.3,72.0" />
<path strokeWidth="24" d="M359.0,72.0 C363.4,70.7 376.8,63.4 385.8,64.0 C394.7,64.7 406.3,72.0 412.5,76.0 C418.8,80.0 421.5,86.0 423.3,88.0" />
<path strokeWidth="40" d="M423.3,80.0 C425.9,74.7 434.0,58.7 439.3,48.0 C444.7,37.4 451.4,26.7 455.4,16.0 C459.4,5.4 462.1,-10.6 463.4,-16.0" />
<path strokeWidth="11" d="M367.0,64.0 C367.0,57.4 365.7,37.4 367.0,24.0 C368.3,10.7 373.7,-9.3 375.0,-16.0" />
<path strokeWidth="28" d="M278.6,200.0 C281.7,193.4 296.9,174.7 297.4,160.0 C297.8,145.4 285.3,128.0 281.3,112.0 C277.3,96.0 273.7,80.7 273.3,64.0 C272.8,47.4 277.7,20.7 278.6,12.0" />
<path strokeWidth="12" d="M310.8,148.0 C314.3,144.7 327.3,135.4 332.2,128.0 C337.1,120.7 338.9,108.0 340.2,104.0" />
<path strokeWidth="22" d="M198.3,184.0 C199.2,177.4 201.8,160.0 203.6,144.0 C205.4,128.0 208.5,105.4 209.0,88.0 C209.4,70.7 206.3,54.7 206.3,40.0 C206.3,25.4 208.5,6.7 209.0,0.0" />
<path strokeWidth="6" d="M160.8,180.0 C159.4,172.7 152.7,150.0 152.7,136.0 C152.7,122.0 155.9,109.4 160.8,96.0 C165.7,82.7 178.6,62.7 182.2,56.0" />
<path strokeWidth="7" d="M128.6,200.0 C127.7,196.0 120.6,184.0 123.3,176.0 C125.9,168.0 141.1,156.0 144.7,152.0" />
</g><g className="river">
<path d="M476.8,496.0 C465.2,485.4 426.8,454.7 407.2,432.0 C387.5,409.4 375.0,382.7 359.0,360.0 C342.9,337.4 324.1,314.7 310.8,296.0 C297.4,277.4 284.0,256.0 278.6,248.0" />
<path d="M428.6,105.6 C434.0,110.7 449.1,127.0 460.8,136.0 C472.4,145.1 485.8,150.7 498.3,160.0 C510.8,169.4 523.3,178.7 535.8,192.0 C548.3,205.4 567.0,232.0 573.2,240.0" />
<path d="M107.2,592.0 C110.8,584.0 125.0,562.7 128.6,544.0 C132.2,525.4 123.3,501.4 128.6,480.0 C134.0,458.7 155.4,426.7 160.8,416.0" />
</g>
<path className="land" d="M275.9,212.0 C269.7,210.7 261.2,198.7 259.9,192.0 C258.5,185.4 262.1,174.7 267.9,172.0 C273.7,169.4 289.8,171.4 294.7,176.0 C299.6,180.7 300.5,194.0 297.4,200.0 C294.2,206.0 282.2,213.4 275.9,212.0Z" />
<path className="land" d="M284.0,164.0 C279.1,162.7 276.4,152.0 278.6,148.0 C280.8,144.0 292.5,138.7 297.4,140.0 C302.3,141.4 310.3,152.0 308.1,156.0 C305.8,160.0 288.9,165.4 284.0,164.0Z" />
<path className="land" d="M302.7,140.0 C300.9,138.0 305.8,126.0 310.8,120.0 C315.7,114.0 327.3,104.7 332.2,104.0 C337.1,103.4 342.0,111.4 340.2,116.0 C338.4,120.7 327.7,128.0 321.5,132.0 C315.2,136.0 304.5,142.0 302.7,140.0Z" />
<path className="land" d="M160.8,196.0 C156.3,195.4 151.4,184.7 152.7,180.0 C154.1,175.4 164.3,167.4 168.8,168.0 C173.3,168.7 180.8,179.4 179.5,184.0 C178.2,188.7 165.2,196.7 160.8,196.0Z" />
<path className="land" d="M182.2,168.0 C177.7,162.7 167.9,129.4 168.8,112.0 C169.7,94.7 182.2,68.0 187.5,64.0 C192.9,60.0 199.6,74.7 200.9,88.0 C202.3,101.4 198.7,130.7 195.6,144.0 C192.5,157.4 186.7,173.4 182.2,168.0Z" />
<path className="land" d="M369.7,56.0 C365.7,40.7 363.4,-10.6 372.4,-24.0 C381.3,-37.3 410.8,-33.3 423.3,-24.0 C435.8,-14.6 445.6,17.4 447.4,32.0 C449.1,46.7 442.4,58.0 434.0,64.0 C425.5,70.0 407.2,69.4 396.5,68.0 C385.8,66.7 373.7,71.4 369.7,56.0Z" />
<g className="art">
<path d="M214.3,288.0 C225.0,294.7 259.0,315.4 278.6,328.0 C298.3,340.7 314.3,352.0 332.2,364.0 C350.0,376.0 376.8,394.0 385.8,400.0" />
<path d="M423.3,128.0 C422.8,146.7 414.3,201.4 420.6,240.0 C426.8,278.7 446.9,320.0 460.8,360.0 C474.6,400.0 496.5,460.0 503.6,480.0" />
<path d="M420.6,240.0 C410.3,256.0 373.7,315.4 359.0,336.0 C344.2,356.7 347.4,348.0 332.2,364.0 C317.0,380.0 278.6,420.7 267.9,432.0" />
<path d="M498.3,176.0 C497.8,193.4 495.6,242.7 495.6,280.0 C495.6,317.4 497.8,380.0 498.3,400.0" />
<path d="M509.0,168.0 C516.1,169.4 534.9,172.0 551.8,176.0 C568.8,180.0 600.9,189.4 610.7,192.0" />
<path d="M155.4,292.0 C140.2,296.7 92.9,312.7 64.3,320.0 C35.8,327.4 -2.6,333.4 -16.0,336.0" />
<path d="M64.3,148.0 C73.3,136.7 96.5,100.7 117.9,80.0 C139.3,59.4 175.0,40.0 192.9,24.0 C210.8,8.0 219.7,-9.3 225.0,-16.0" />
<path d="M142.0,544.0 C155.9,541.4 193.3,532.0 225.0,528.0 C256.7,524.0 296.5,524.0 332.2,520.0 C367.9,516.0 421.5,506.7 439.3,504.0" />
<path d="M492.9,64.0 L530.4,72.0" />
<path d="M214.3,288.0 C216.1,280.0 224.2,254.7 225.0,240.0 C225.9,225.4 220.6,206.7 219.7,200.0" />
<path d="M171.5,288.0 C178.6,288.0 196.5,288.0 214.3,288.0 C232.2,288.0 267.9,288.0 278.6,288.0" />
<path d="M332.2,184.0 C341.1,185.4 367.9,190.0 385.8,192.0 C403.6,194.0 430.4,195.4 439.3,196.0" />
<path d="M369.7,120.0 C377.7,121.4 402.7,126.0 417.9,128.0 C433.1,130.0 453.6,131.4 460.8,132.0" />
</g><g className="hwy">
<path d="M128.6,704.0 C129.5,693.4 132.6,658.7 134.0,640.0 C135.3,621.4 135.3,608.0 136.7,592.0 C138.0,576.0 139.3,569.4 142.0,544.0 C144.7,518.7 148.7,472.0 152.7,440.0 C156.7,408.0 162.5,376.0 166.1,352.0 C169.7,328.0 169.7,307.4 174.2,296.0 C178.6,284.7 184.4,286.7 192.9,284.0 C201.4,281.4 214.3,282.7 225.0,280.0 C235.8,277.4 244.7,273.4 257.2,268.0 C269.7,262.7 284.0,256.7 300.0,248.0 C316.1,239.4 339.3,225.4 353.6,216.0 C367.9,206.7 377.3,202.7 385.8,192.0 C394.2,181.4 398.3,162.0 404.5,152.0 C410.8,142.0 413.9,136.0 423.3,132.0 C432.6,128.0 450.5,134.0 460.8,128.0 C471.0,122.0 479.5,106.7 484.9,96.0 C490.2,85.4 490.2,82.7 492.9,64.0 C495.6,45.4 499.6,-2.6 500.9,-16.0" />
<path d="M155.4,292.0 C149.2,287.4 128.6,276.7 117.9,264.0 C107.2,251.4 99.2,233.4 91.1,216.0 C83.1,198.7 75.9,182.7 69.7,160.0 C63.4,137.4 56.3,109.4 53.6,80.0 C50.9,50.7 53.6,0.0 53.6,-16.0" />
<path d="M407.2,132.0 C400.9,129.4 378.6,120.7 369.7,116.0 C360.8,111.4 359.0,114.0 353.6,104.0 C348.3,94.0 344.7,76.0 337.5,56.0 C330.4,36.0 315.2,-4.0 310.8,-16.0" />
<path d="M439.3,128.0 C447.4,133.4 474.6,160.0 487.5,160.0 C500.5,160.0 510.3,142.7 517.0,128.0 C523.7,113.4 525.0,96.0 527.7,72.0 C530.4,48.0 532.2,-1.3 533.1,-16.0" />
<path d="M388.4,192.0 C394.2,194.7 410.3,206.7 423.3,208.0 C436.2,209.4 454.1,205.4 466.1,200.0 C478.2,194.7 490.7,180.0 495.6,176.0" />
</g>
<text className="plbl" x="356.3" y="304.0">Joint Base Lewis-McChord</text>
<text className="plbl" x="50.9" y="328.0">Capitol State Forest</text>
<text className="wlbl" transform="translate(452.7,36.0) rotate(-58)">Puget Sound</text>
<text className="wlbl" transform="translate(203.6,56.0) rotate(-88)">Case Inlet</text>
<text className="wlbl" transform="translate(273.3,56.0) rotate(-88)">Carr Inlet</text>
<text className="wlbl" transform="translate(235.8,204.0) rotate(22)">Nisqually Reach</text>
<text className="wlbl" transform="translate(165.0,232.0) rotate(-85)">Budd Inlet</text>
<text className="wlbl" transform="translate(423.3,88.0) rotate(0)">Commencement Bay</text>
<g className="shield i" transform="translate(155.4,416.0)"><rect x="-6.0" y="-7" width="12" height="14" rx="3" /><text y="3.6">5</text></g>
<g className="shield i" transform="translate(401.8,156.0)"><rect x="-6.0" y="-7" width="12" height="14" rx="3" /><text y="3.6">5</text></g>
<g className="shield" transform="translate(77.7,184.0)"><rect x="-10.5" y="-7" width="21" height="14" rx="3" /><text y="3.6">101</text></g>
<g className="shield" transform="translate(344.0,80.0)"><rect x="-8.5" y="-7" width="17" height="14" rx="3" /><text y="3.6">16</text></g>
<g className="shield" transform="translate(522.9,104.0)"><rect x="-10.5" y="-7" width="21" height="14" rx="3" /><text y="3.6">167</text></g>
<g className="shield" transform="translate(439.3,205.6)"><rect x="-10.5" y="-7" width="21" height="14" rx="3" /><text y="3.6">512</text></g>
<g className="dot big" data-city="Olympia" transform="translate(171.1,289.7)"><circle className="hit" r="11" /><circle className="c" r="4" /><text x="-8" y="4" textAnchor="end">Olympia</text></g>
<g className="dot big" data-city="Lacey" transform="translate(212.6,292.6)"><circle className="hit" r="11" /><circle className="c" r="4" /><text x="0" y="16" textAnchor="middle">Lacey</text></g>
<g className="dot" data-city="Tumwater" transform="translate(166.5,314.2)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="-8" y="4" textAnchor="end">Tumwater</text></g>
<g className="dot big" data-city="Tacoma" transform="translate(415.6,117.7)"><circle className="hit" r="11" /><circle className="c" r="4" /><text x="0" y="-9" textAnchor="middle">Tacoma</text></g>
<g className="dot" data-city="Puyallup" transform="translate(496.7,171.7)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="8" y="4" textAnchor="start">Puyallup</text></g>
<g className="dot" data-city="Lakewood" transform="translate(375.8,182.6)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="8" y="4" textAnchor="start">Lakewood</text></g>
<g className="dot" data-city="University Place" transform="translate(358.8,131.5)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="-8" y="4" textAnchor="end">University Place</text></g>
<g className="dot" data-city="Gig Harbor" transform="translate(342.8,56.6)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="-8" y="4" textAnchor="end">Gig Harbor</text></g>
<g className="dot" data-city="Federal Way" transform="translate(486.1,62.2)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="8" y="4" textAnchor="start">Federal Way</text></g>
<g className="dot" data-city="Auburn" transform="translate(531.2,74.2)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="8" y="4" textAnchor="start">Auburn</text></g>
<g className="dot" data-city="Bonney Lake" transform="translate(553.7,178.2)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="0" y="16" textAnchor="middle">Bonney Lake</text></g>
<g className="dot" data-city="Spanaway" transform="translate(420.8,236.8)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="8" y="4" textAnchor="start">Spanaway</text></g>
<g className="dot" data-city="Steilacoom" transform="translate(330.8,184.2)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="-8" y="4" textAnchor="end">Steilacoom</text></g>
<g className="dot" data-city="Centralia" transform="translate(142.4,547.1)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="8" y="4" textAnchor="start">Centralia</text></g>
<g className="dot" data-city="Chehalis" transform="translate(137.2,590.3)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="8" y="4" textAnchor="start">Chehalis</text></g>
<g className="dot" data-city="DuPont" transform="translate(315.5,242.6)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="-8" y="4" textAnchor="end">DuPont</text></g>
<g className="dot" data-city="Graham" transform="translate(495.9,277.7)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="8" y="4" textAnchor="start">Graham</text></g>
<g className="dot" data-city="Yelm" transform="translate(329.0,366.4)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="8" y="4" textAnchor="start">Yelm</text></g>
<g className="dot" data-city="Shelton" transform="translate(64.0,147.9)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="8" y="4" textAnchor="start">Shelton</text></g>
<g className="dot" data-city="Fife" transform="translate(462.3,128.6)"><circle className="hit" r="11" /><circle className="c" r="3.2" /><text x="8" y="4" textAnchor="start">Fife</text></g>
<g id="pin" transform="translate(212.6,292.6)"><g className="pin-drop"><ellipse className="shadow" cx="0" cy="0" rx="6" ry="2.2" /><path filter="url(#pinsh)" d="M0 0 C-2.5 -7 -11 -13 -11 -22 A11 11 0 1 1 11 -22 C11 -13 2.5 -7 0 0Z" fill="#EA4335" stroke="#B31412" strokeWidth="1" /><circle cx="0" cy="-22" r="4" fill="#7A0E0B" /></g></g>
</g></svg>
      <button type="button" className="recenter">Recenter</button>
      <div className="zoom"><button type="button" data-z="in" aria-label="Zoom in">+</button><button type="button" data-z="out" aria-label="Zoom out">−</button></div>
      <div className="map-note" id="mapNote" aria-live="polite"><span><b>Lacey</b> · Home base and showroom</span><a href="https://www.google.com/maps/dir/?api=1&destination=8695+Martin+Way+E+%23101+Lacey+WA+98516" target="_blank" rel="noopener">Directions</a></div>
    </div>
  </div>
</section>
    </>
  );
}
