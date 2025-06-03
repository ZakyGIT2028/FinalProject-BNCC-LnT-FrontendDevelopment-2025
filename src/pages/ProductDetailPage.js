import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import '../styles/styles.css';

const allProducts = [
  {
    id: 1,
    name: 'Rolex Submariner',
    price: 'Rp 320.000.000',
    category: 'Jam',
    images: ['jam_1_1.png', 'jam_1_1_a.png', 'jam_1_1_b.png', 'jam_1_1_c.png'],
    description: `
      <div class="description-content">
        <h3>Rolex Submariner - Deepsea 136660</h3>
        <p>Discover the pinnacle of underwater exploration with the Rolex Submariner Deepsea 136660, a masterpiece of horological engineering. Designed for the modern adventurer, this timepiece combines rugged durability with timeless elegance, featuring a striking D-blue dial and Oystersteel construction. With an extraordinary water resistance of 3,900 meters, it’s the ultimate companion for deep-sea exploration.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Movement:</strong> Perpetual, mechanical, self-winding Calibre 3235, Manufacture Rolex, with approximately 70-hour power reserve.</li>
          <li><strong>Precision:</strong> -2/+2 sec/day, after casing, for unmatched accuracy.</li>
          <li><strong>Dial:</strong> D-blue with highly legible Chromalight display, featuring long-lasting blue luminescence.</li>
          <li><strong>Bezel:</strong> Unidirectional rotatable 60-minute graduated, with scratch-resistant Cerachrom insert in ceramic, platinum-coated numerals.</li>
          <li><strong>Case:</strong> 44 mm Oystersteel with Rolex Ringlock System and helium escape valve.</li>
          <li><strong>Glass:</strong> Domed, 5.5 mm-thick scratch-resistant sapphire.</li>
          <li><strong>Water Resistance:</strong> Waterproof to 3,900 meters / 12,800 feet.</li>
          <li><strong>Bracelet:</strong> Oystersteel with folding Oysterlock safety clasp and Rolex Glidelock extension system.</li>
          <li><strong>Winding:</strong> Bidirectional self-winding via Perpetual rotor, with screw-down Triplock triple waterproofness system.</li>
          <li><strong>Functions:</strong> Centre hour, minute, and seconds hands, instantaneous date with rapid setting, stop-seconds for precise time setting.</li>
          <li><strong>Oscillator:</strong> Paramagnetic blue Parachrom hairspring with high-performance Paraflex shock absorbers.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Rolex Deepsea 136660 Sea-Dweller Deep Blue Dial, James Cameron Bracelet</li>
          <li>Official Rolex Certificate Card</li>
          <li>Rolex Manual Book</li>
          <li>Rolex Hang Tag</li>
          <li>Watch Box</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Elevate your collection with this exceptional timepiece, crafted for those who demand precision, durability, and sophistication.</p>
      </div>
    `,
    checkoutCount: 120
  },
  {
    id: 2,
    name: 'Richard Mille RM 11-03',
    price: 'Rp 230.000.000.000',
    category: 'Jam',
    images: ['jam_2.png', 'jam_2_a.png', 'jam_2_b.png', 'jam_2_c.png'],
    description: `
      <div class="description-content">
        <h3>Richard Mille RM 11-03 - Flyback Chronograph</h3>
        <p>The Richard Mille RM 11-03 is a testament to avant-garde watchmaking, seamlessly blending cutting-edge technology with audacious design. Encased in lightweight yet durable titanium, this timepiece features a skeletonized automatic movement that reveals the intricate mechanics within. Designed for those who appreciate both form and function, the RM 11-03 is a symbol of exclusivity and innovation.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Movement:</strong> Automatic winding flyback chronograph with hours, minutes, seconds, date, and annual calendar.</li>
          <li><strong>Power Reserve:</strong> Approximately 55 hours.</li>
          <li><strong>Case:</strong> Tonneau-shaped, crafted from grade 5 titanium, with a sapphire crystal case back.</li>
          <li><strong>Dial:</strong> Skeletonized with anti-glare treatment, providing a view of the movement.</li>
          <li><strong>Water Resistance:</strong> 50 meters / 165 feet.</li>
          <li><strong>Strap:</strong> Rubber with a titanium folding clasp.</li>
          <li><strong>Functions:</strong> Flyback chronograph, annual calendar, oversized date, 12-hour totalizer.</li>
          <li><strong>Dimensions:</strong> 50 mm x 42.7 mm x 16.15 mm.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Richard Mille RM 11-03 Flyback Chronograph</li>
          <li>Official Richard Mille Certificate of Authenticity</li>
          <li>Richard Mille Manual Book</li>
          <li>Richard Mille Hang Tag</li>
          <li>Luxury Watch Box</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Embrace the future of horology with the RM 11-03, a timepiece that redefines luxury and performance for the discerning collector.</p>
      </div>
    `,
    checkoutCount: 80
  },
  {
    id: 3,
    name: 'Hermès Birkin Bag',
    price: 'Rp 30.000.000',
    category: 'Tas',
    images: ['tas_1.png'],
    description: `
      <div class="description-content">
        <h3>Hermès Birkin Bag - 30cm Togo Leather</h3>
        <p>The Hermès Birkin Bag is the epitome of luxury and exclusivity, handcrafted from premium Togo leather by master artisans. Known for its timeless design and unparalleled craftsmanship, this iconic bag features the signature lock-and-key closure and spacious interior lined with goat skin. A true investment piece, the Birkin is coveted by fashion aficionados worldwide.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> Togo leather, known for its soft texture and durability.</li>
          <li><strong>Size:</strong> 30 cm, ideal for everyday use.</li>
          <li><strong>Hardware:</strong> Palladium-plated for a sleek, modern look.</li>
          <li><strong>Interior:</strong> Lined with Chevre Mysore goat leather, with one zip pocket and one open pocket.</li>
          <li><strong>Closure:</strong> Signature Hermès turn-lock with keys and padlock.</li>
          <li><strong>Strap:</strong> Double rolled leather handles for comfortable carrying.</li>
          <li><strong>Feet:</strong> Protective metal feet to preserve the bag's base.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Hermès Birkin Bag 30cm Togo Leather</li>
          <li>Hermès Dust Bag</li>
          <li>Hermès Authenticity Card</li>
          <li>Hermès Box</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Indulge in the ultimate luxury accessory with the Hermès Birkin Bag, a timeless piece that embodies sophistication and style.</p>
      </div>
    `,
    checkoutCount: 200
  },
  {
    id: 4,
    name: 'Dior Saddle Bag',
    price: 'Rp 35.000.000',
    category: 'Tas',
    images: ['tas_2.png'],
    description: `
      <div class="description-content">
        <h3>Dior Saddle Bag - Grained Calfskin</h3>
        <p>The Dior Saddle Bag is a modern icon, reimagined from its legendary 1990s design. Crafted from luxurious grained calfskin, this bag features the signature curved silhouette, accented with the iconic ‘D’ stirrup charm and antiqued gold hardware. Its adjustable strap and spacious interior make it both versatile and practical for everyday elegance.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> Grained calfskin leather for a refined texture.</li>
          <li><strong>Dimensions:</strong> 25.5 cm x 20 cm x 6.5 cm.</li>
          <li><strong>Hardware:</strong> Antiqued gold-tone metal.</li>
          <li><strong>Strap:</strong> Adjustable leather strap for shoulder or crossbody wear.</li>
          <li><strong>Interior:</strong> Suede lining with one zip pocket.</li>
          <li><strong>Closure:</strong> Magnetic flap closure with ‘D’ stirrup detail.</li>
          <li><strong>Embellishments:</strong> Christian Dior signature on the front.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Dior Saddle Bag Grained Calfskin</li>
          <li>Dior Dust Bag</li>
          <li>Dior Authenticity Card</li>
          <li>Dior Box</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Elevate your style with the Dior Saddle Bag, a perfect blend of heritage and contemporary chic for the modern fashionista.</p>
      </div>
    `,
    checkoutCount: 150
  },
  {
    id: 5,
    name: 'Air Jordan 1',
    price: 'Rp 5.000.000',
    category: 'Sepatu',
    images: ['sepatu_1.png'],
    description: `
      <div class="description-content">
        <h3>Air Jordan 1 - High Top Sneakers</h3>
        <p>The Air Jordan 1 is more than just a sneaker; it's a cultural phenomenon. Crafted from premium full-grain leather, these high-top sneakers offer durability and a luxurious feel. With a cushioned Air-Sole unit and a classic design featuring the iconic Nike Swoosh, the Air Jordan 1 is a must-have for sneakerheads and style enthusiasts alike.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> Full-grain leather upper for durability and support.</li>
          <li><strong>Sole:</strong> Rubber outsole with encapsulated Air-Sole unit for cushioning.</li>
          <li><strong>Design:</strong> High-top silhouette with perforated toe box and padded collar.</li>
          <li><strong>Closure:</strong> Lace-up front with metal eyelets.</li>
          <li><strong>Branding:</strong> Nike Swoosh on sides, Air Jordan wings logo on collar.</li>
          <li><strong>Colorway:</strong> Classic black and red for a bold statement.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Air Jordan 1 High Top Sneakers</li>
          <li>Original Shoe Box</li>
          <li>Care Instructions Booklet</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Step into a legacy of style and performance with the Air Jordan 1, where every detail is designed to make an impact.</p>
      </div>
    `,
    checkoutCount: 300
  },
  {
    id: 6,
    name: 'Heremes High Heels',
    price: 'Rp 7.000.000',
    category: 'Sepatu',
    images: ['sepatu_2.png'],
    description: `
      <div class="description-content">
        <h3>Hermès High Heels - Patent Leather Stilettos</h3>
        <p>The Hermès High Heels are a celebration of elegance and sophistication, handcrafted from glossy patent leather. With a graceful 85mm stiletto heel and the iconic ‘H’ cutout detail, these heels offer both style and comfort. The cushioned insole ensures you can wear them from day to night with ease.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> High-quality patent leather for a sleek finish.</li>
          <li><strong>Heel Height:</strong> 85 mm stiletto heel for elegance and stability.</li>
          <li><strong>Design:</strong> Pointed toe with signature ‘H’ cutout on the side.</li>
          <li><strong>Insole:</strong> Cushioned for all-day comfort.</li>
          <li><strong>Sole:</strong> Leather sole with rubber insert for traction.</li>
          <li><strong>Color:</strong> Classic black, versatile for any occasion.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Hermès High Heels Patent Leather</li>
          <li>Hermès Shoe Box</li>
          <li>Hermès Dust Bag</li>
          <li>Care Instructions</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Make a statement with the Hermès High Heels, where luxury meets comfort in every step.</p>
      </div>
    `,
    checkoutCount: 250
  },
  {
    id: 7,
    name: 'Jewelry with 18K Gold',
    price: 'Rp 20.000.000',
    category: 'Perhiasan',
    images: ['perhiasan_1.png'],
    description: `
      <div class="description-content">
        <h3>18K Gold Necklace with Gemstones</h3>
        <p>This exquisite 18K gold necklace is a testament to timeless beauty and masterful craftsmanship. Adorned with sparkling gemstones, it features delicate filigree patterns that catch the light from every angle. Perfect for both everyday elegance and special occasions, this piece is a cherished addition to any jewelry collection.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> 18K yellow gold, hallmarked for authenticity.</li>
          <li><strong>Gemstones:</strong> Genuine diamonds and sapphires, ethically sourced.</li>
          <li><strong>Design:</strong> Intricate filigree work with a secure lobster clasp.</li>
          <li><strong>Length:</strong> 45 cm, adjustable to 42 cm.</li>
          <li><strong>Weight:</strong> Approximately 15 grams.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>18K Gold Necklace with Gemstones</li>
          <li>Certificate of Authenticity</li>
          <li>Luxury Jewelry Box</li>
          <li>Care Instructions</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Indulge in the allure of this 18K gold necklace, a piece that embodies luxury and sophistication.</p>
      </div>
    `,
    checkoutCount: 90
  },
  {
    id: 8,
    name: 'Perhiasan Emas 2',
    price: 'Rp 25.000.000',
    category: 'Perhiasan',
    images: ['perhiasan_2.png'],
    description: `
      <div class="description-content">
        <h3>18K Yellow Gold Diamond Bracelet</h3>
        <p>Crafted from radiant 18K yellow gold, this bracelet is a stunning blend of tradition and modernity. Its bold geometric design is enhanced by meticulously set diamonds, creating a dazzling interplay of light. Perfect for making a statement at formal events or elevating daily attire, this piece is forged with precision and care.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> 18K yellow gold, polished to a high shine.</li>
          <li><strong>Diamonds:</strong> 2.0 carats total weight, VS clarity, G color.</li>
          <li><strong>Design:</strong> Geometric links with a secure box clasp.</li>
          <li><strong>Length:</strong> 18 cm, with a 2 cm extension.</li>
          <li><strong>Weight:</strong> Approximately 20 grams.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>18K Yellow Gold Diamond Bracelet</li>
          <li>Certificate of Authenticity</li>
          <li>Luxury Jewelry Box</li>
          <li>Care Instructions</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Adorn your wrist with this exquisite bracelet, a symbol of enduring elegance and luxury.</p>
      </div>
    `,
    checkoutCount: 70
  },
  {
    id: 9,
    name: 'AP Royal Oak Offshore',
    price: 'Rp 900.000.000',
    category: 'Jam',
    images: ['jam_d_3.png', 'jam_d_1.png', 'jam_d_2.png'],
    description: `
      <div class="description-content">
        <h3>Audemars Piguet Royal Oak Offshore - Chronograph</h3>
        <p>The Audemars Piguet Royal Oak Offshore is a bold statement in modern horology, combining rugged durability with refined aesthetics. Its iconic octagonal bezel, secured with eight hexagonal screws, and the distinctive ‘Tapisserie’ dial set it apart. Powered by a self-winding manufacture caliber, this timepiece is designed for those who appreciate both style and substance.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Movement:</strong> Self-winding chronograph with date display.</li>
          <li><strong>Power Reserve:</strong> Approximately 50 hours.</li>
          <li><strong>Case:</strong> 42 mm stainless steel with glareproofed sapphire crystal.</li>
          <li><strong>Dial:</strong> Black ‘Méga Tapisserie’ pattern with luminescent hands and hour markers.</li>
          <li><strong>Water Resistance:</strong> 100 meters / 330 feet.</li>
          <li><strong>Strap:</strong> Rubber with stainless steel pin buckle.</li>
          <li><strong>Functions:</strong> Hours, minutes, small seconds, date, chronograph.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Audemars Piguet Royal Oak Offshore Chronograph</li>
          <li>Official AP Certificate of Authenticity</li>
          <li>AP Manual Book</li>
          <li>AP Hang Tag</li>
          <li>Luxury Watch Box</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Experience the perfect blend of sporty functionality and luxurious design with the Royal Oak Offshore.</p>
      </div>
    `,
    checkoutCount: 100
  },
  {
    id: 10,
    name: 'Royal Oak Offshore 43 - 15601BC.YY.D343CA.01 Selfwinding Music Edition Navy',
    price: 'Rp 530.000.000.000',
    category: 'Jam',
    images: ['jam_4.png', 'jam_4_a.png', 'jam_4_b.png', 'jam_4_c.png'],
    description: `
      <div class="description-content">
        <h3>Royal Oak Offshore 43 - Music Edition Navy</h3>
        <p>The Royal Oak Offshore 43 Music Edition is a limited-edition masterpiece inspired by the world of music. Encased in white gold with a navy ceramic bezel, this timepiece features a dial adorned with equalizer-inspired motifs. The self-winding chronograph movement and interchangeable strap system make it both technically impressive and versatile.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Movement:</strong> Self-winding chronograph with date display.</li>
          <li><strong>Power Reserve:</strong> Approximately 50 hours.</li>
          <li><strong>Case:</strong> 43 mm white gold with navy ceramic bezel.</li>
          <li><strong>Dial:</strong> Navy blue with music-inspired patterns and luminescent markers.</li>
          <li><strong>Water Resistance:</strong> 100 meters / 330 feet.</li>
          <li><strong>Strap:</strong> Interchangeable navy rubber strap with white gold pin buckle.</li>
          <li><strong>Functions:</strong> Hours, minutes, small seconds, date, chronograph.</li>
          <li><strong>Limited Edition:</strong> Only 250 pieces worldwide.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Royal Oak Offshore 43 Music Edition Navy</li>
          <li>Official AP Certificate of Authenticity</li>
          <li>AP Manual Book</li>
          <li>AP Hang Tag</li>
          <li>Luxury Watch Box</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Own a piece of horological art with this exclusive Music Edition, where innovation meets creativity.</p>
      </div>
    `,
    checkoutCount: 90
  },
  {
    id: 11,
    name: 'Chanel Classic Flap Bag',
    price: 'Rp 40.000.000',
    category: 'Tas',
    images: ['tas_3.png'],
    description: `
      <div class="description-content">
        <h3>Chanel Classic Flap Bag - Quilted Lambskin</h3>
        <p>The Chanel Classic Flap Bag is a timeless icon of elegance, designed by Coco Chanel. Crafted from luxurious quilted lambskin leather, it features the signature interlocking CC turn-lock closure and a versatile gold-tone chain strap. The burgundy leather interior offers multiple compartments for practicality, making it the perfect accessory for any occasion.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> Soft lambskin leather with quilted pattern.</li>
          <li><strong>Size:</strong> Medium, 25.5 cm x 15.5 cm x 6.5 cm.</li>
          <li><strong>Hardware:</strong> Gold-tone metal.</li>
          <li><strong>Strap:</strong> Chain and leather strap for shoulder or crossbody wear.</li>
          <li><strong>Interior:</strong> Burgundy leather lining with multiple pockets.</li>
          <li><strong>Closure:</strong> CC turn-lock closure.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Chanel Classic Flap Bag Quilted Lambskin</li>
          <li>Chanel Dust Bag</li>
          <li>Chanel Authenticity Card</li>
          <li>Chanel Box</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Invest in timeless sophistication with the Chanel Classic Flap Bag, a staple for every fashion connoisseur.</p>
      </div>
    `,
    checkoutCount: 180
  },
  {
    id: 12,
    name: 'Gucci Dionysus Bag',
    price: 'Rp 45.000.000',
    category: 'Tas',
    images: ['tas_4.png'],
    description: `
      <div class="description-content">
        <h3>Gucci Dionysus Bag - GG Supreme Canvas</h3>
        <p>The Gucci Dionysus Bag is a celebration of artistry and heritage, featuring the signature tiger-head spur closure inspired by Greek mythology. Crafted from GG Supreme canvas and supple suede, this bag offers a structured silhouette with hand-painted edges and a sliding chain strap. Its richly textured interior and intricate embroidery make it a standout piece.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> GG Supreme canvas with satin suede detailing.</li>
          <li><strong>Dimensions:</strong> 28 cm x 17 cm x 9 cm.</li>
          <li><strong>Hardware:</strong> Antiqued silver-tone tiger-head spur.</li>
          <li><strong>Strap:</strong> Sliding chain strap for shoulder or crossbody wear.</li>
          <li><strong>Interior:</strong> Microfiber lining with zip and open pockets.</li>
          <li><strong>Closure:</strong> Flap with tiger-head spur closure.</li>
          <li><strong>Embellishments:</strong> Hand-embroidered appliqués.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Gucci Dionysus Bag GG Supreme Canvas</li>
          <li>Gucci Dust Bag</li>
          <li>Gucci Authenticity Card</li>
          <li>Gucci Box</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Make a bold statement with the Gucci Dionysus Bag, where myth meets modern luxury.</p>
      </div>
    `,
    checkoutCount: 160
  },
  {
    id: 13,
    name: 'Vegas ankle boots',
    price: 'Rp 8.000.000',
    category: 'Sepatu',
    images: ['sepatu_3.png'],
    description: `
      <div class="description-content">
        <h3>Vegas Ankle Boots - Italian Calf Leather</h3>
        <p>The Vegas Ankle Boots are a perfect fusion of style and comfort, handcrafted from premium Italian calf leather. Featuring a sleek silhouette with a sturdy block heel and polished silver hardware, these boots are designed for the modern individual. The cushioned insole and durable rubber sole provide all-day wearability, making them a versatile addition to any wardrobe.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> Italian calf leather for a luxurious feel.</li>
          <li><strong>Heel Height:</strong> 50 mm block heel for stability and style.</li>
          <li><strong>Design:</strong> Ankle boot with side zipper and silver hardware accents.</li>
          <li><strong>Insole:</strong> Cushioned for comfort.</li>
          <li><strong>Sole:</strong> Rubber sole for durability and traction.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Vegas Ankle Boots Italian Calf Leather</li>
          <li>Original Shoe Box</li>
          <li>Care Instructions Booklet</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Step into sophistication with the Vegas Ankle Boots, where luxury meets practicality.</p>
      </div>
    `,
    checkoutCount: 280
  },
  {
    id: 14,
    name: 'Heremes Flats',
    price: 'Rp 9.000.000',
    category: 'Sepatu',
    images: ['sepatu_4'],
    description: `
      <div class="description-content">
        <h3>Hermès Flat Shoes - Buttery Leather</h3>
        <p>The Hermès Flat Shoes are the epitome of understated luxury, handcrafted from premium leather with meticulous attention to detail. Featuring an iconic ‘H’ emblem and logo with hand-stitched embellishments, these flats offer a perfect balance of style and comfort. The flexible sole and padded insole ensure exceptional support for all-day wearability.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> Premium leather for a soft, luxurious feel.</li>
          <li><strong>Design:</strong> Slip-on flat with ‘H’ logo and contrast stitching.</li>
          <li><strong>Insole:</strong> Padded insole for all-day comfort.</li>
          <li><strong>Sole:</strong> Flexible sole with rubber insert for traction.</li>
          <li><strong>Colour:</strong> Nude, versatile for any outfit.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>Hermès Flat Shoes Buttery Leather</li>
          <li>Hermès Shoe Box</li>
          <li>Hermès Dust Bag</li>
          <li>Care Instructions</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Experience elegance without compromise with these Hermès Flat Shoes, designed for the modern sophisticate.</p>
      </div>
    `,
    checkoutCount: 260
  },
  {
    id: 15,
    name: 'Perhiasan Emas 3',
    price: 'Rp 30.000.000',
    category: 'Perhiasan',
    images: ['perhiasan_3.png'],
    description: `
      <div class="description-content">
        <h3>18K White Gold Diamond Earrings</h3>
        <p>These breathtaking 18K white gold earrings are a tribute to brilliance, adorned with ethically sourced diamonds that sparkle with every movement. The delicate design, inspired by nature’s elegance, features flowing lines and intricate settings that showcase the stones’ clarity. Perfect for special occasions or as a signature piece, these earrings are handcrafted to perfection.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> 18K white gold, rhodium-plated for extra shine.</li>
          <li><strong>Diamonds:</strong> 1.5 carats total weight, SI clarity, H color.</li>
          <li><strong>Design:</strong> Drop earrings with secure lever-back closures.</li>
          <li><strong>Length:</strong> 3 cm, perfect for day or evening wear.</li>
          <li><strong>Weight:</strong> Approximately 5 grams per earring.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>18K White Gold Diamond Earrings</li>
          <li>Certificate of Authenticity</li>
          <li>Luxury Jewelry Box</li>
          <li>Care Instructions</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Adorn yourself with these exquisite earrings, a timeless piece that captivates and enchants.</p>
      </div>
    `,
    checkoutCount: 110
  },
  {
    id: 16,
    name: 'Perhiasan Emas 4',
    price: 'Rp 35.000.000',
    category: 'Perhiasan',
    images: ['perhiasan_4.png'],
    description: `
      <div class="description-content">
        <h3>18K Gold Gemstone Ring</h3>
        <p>A true work of art, this 18K gold ring combines bold design with exquisite craftsmanship. Featuring a striking arrangement of rare gemstones set in a sculptural framework, it exudes confidence and elegance. The polished gold surface reflects light beautifully, while the ergonomic design ensures comfortable wear. Ideal for those who seek to make a lasting impression.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li><strong>Material:</strong> 18K gold, hand-polished.</li>
          <li><strong>Gemstones:</strong> Central sapphire surrounded by diamonds, totaling 3.0 carats.</li>
          <li><strong>Design:</strong> Sculptural band with intricate detailing.</li>
          <li><strong>Size:</strong> Available in sizes 5 to 9.</li>
          <li><strong>Weight:</strong> Approximately 10 grams.</li>
        </ul>
        
        <h4>In the Box</h4>
        <ul>
          <li>18K Gold Gemstone Ring</li>
          <li>Certificate of Authenticity</li>
          <li>Luxury Jewelry Box</li>
          <li>Care Instructions</li>
        </ul>
        
        <p><strong>Condition:</strong> Brand New In Box (BNIB)</p>
        <p>Make a statement with this extraordinary ring, a testament to luxury and individuality.</p>
      </div>
    `,
    checkoutCount: 95
  }
];

function ProductDetailPage() {
  const { id } = useParams();
  const { addToWishlist } = useWishlist();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const product = allProducts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (!product || product.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [product]);

  if (!product) {
    return <div className="container"><p>Product not found.</p></div>;
  }

  const handleAddToWishlist = () => {
    console.log('Product to be added:', product);
    addToWishlist(product);
    alert(`${product.name} has been added to your wishlist!`);
  };

  return (
    <div className="container">
      <div className="product-detail">
        <div className="product-detail-image-container">
          <Link to="/products" className="back-btn">Back to Products</Link>
          {product.images.length > 1 ? (
            <div className="product-carousel">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={`/assets/${image}`}
                  alt={`${product.name} angle ${index + 1}`}
                  className={`product-detail-image ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          ) : (
            <img
              src={`/assets/${product.images[0]}`}
              alt={product.name}
              className="product-detail-image active"
            />
          )}
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-detail-price">{product.price}</p>
          <div className="product-detail-description" dangerouslySetInnerHTML={{ __html: product.description }} />
          <div className="product-detail-buttons">
            <button className="wishlist-btn" onClick={handleAddToWishlist}>
              Tambahkan ke Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;