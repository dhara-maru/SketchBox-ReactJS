const products = [
    {
        _id: "aaaaa",
        name: "Ballpoint Pen",
        description: "A smooth-writing ballpoint pen with a comfortable grip, ideal for everyday use.",
        price: 100,
        image: [p_img1],
        category: "Office",
        subCategory: "Writing Tools",
        sizes: ["Medium", "Fine"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Notebook A5",
        description: "A5-sized notebook with lined pages, perfect for note-taking, journaling, or sketching.",
        price: 200,
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Office",
        subCategory: "Notebooks & Journals",
        sizes: ["A5", "A4"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Pencil Case",
        description: "A small and compact pencil case for storing writing tools.",
        price: 220,
        image: [p_img3],
        category: "School",
        subCategory: "Accessories",
        sizes: ["Small", "Medium", "Large"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Artist's Brush Set",
        description: "A set of high-quality brushes for watercolor and acrylic painting.",
        price: 110,
        image: [p_img4],
        category: "Art",
        subCategory: "Painting Tools",
        sizes: ["Set of 5", "Set of 10"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Ballpoint Pen",
        description: "A smooth-writing ballpoint pen with a comfortable grip, ideal for everyday use.",
        price: 130,
        image: [p_img5],
        category: "Office",
        subCategory: "Writing Tools",
        sizes: ["Medium", "Fine"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Highlighter Set",
        description: "A set of bright highlighters in various colors for marking important text.",
        price: 140,
        image: [p_img6],
        category: "School",
        subCategory: "Writing Tools",
        sizes: ["Set of 6", "Set of 12"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Watercolor Set",
        description: "A complete set of vibrant watercolors for creating beautiful artwork.",
        price: 190,
        image: [p_img7],
        category: "Art",
        subCategory: "Painting Tools",
        sizes: ["Set of 12", "Set of 24"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Binder Clips",
        description: "A pack of durable binder clips to organize documents neatly.",
        price: 140,
        image: [p_img8],
        category: "Office",
        subCategory: "Accessories",
        sizes: ["Small", "Medium", "Large"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "School Backpack",
        description: "A spacious backpack with multiple compartments for school essentials.",
        price: 100,
        image: [p_img9],
        category: "School",
        subCategory: "Backpacks",
        sizes: ["Small", "Medium", "Large"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Canvas Art Paper",
        description: "High-quality canvas paper for painting and sketching.",
        price: 110,
        image: [p_img10],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["A4", "A3"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Mechanical Pencils",
        description: "A set of mechanical pencils with fine tips, perfect for precision writing.",
        price: 120,
        image: [p_img11],
        category: "Office",
        subCategory: "Writing Tools",
        sizes: ["0.5mm", "0.7mm"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Watercolor Paper",
        description: "High-quality paper designed specifically for watercolor painting.",
        price: 150,
        image: [p_img12],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["A4", "A3"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Stationery Set",
        description: "A complete stationery set with pens, pencils, and erasers.",
        price: 130,
        image: [p_img13],
        category: "School",
        subCategory: "Accessories",
        sizes: ["Set of 10", "Set of 20"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Art Easel",
        description: "A sturdy easel for holding canvases while you paint or sketch.",
        price: 160,
        image: [p_img14],
        category: "Art",
        subCategory: "Art Tools",
        sizes: ["Small", "Medium", "Large"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "File Folders",
        description: "Durable file folders for organizing papers and documents.",
        price: 140,
        image: [p_img15],
        category: "Office",
        subCategory: "Accessories",
        sizes: ["Set of 5", "Set of 10"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Color Pencils Set",
        description: "A set of 24 vibrant color pencils for drawing and coloring.",
        price: 170,
        image: [p_img16],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["Set of 12", "Set of 24"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Filing Cabinet",
        description: "A sturdy filing cabinet for storing documents and office supplies.",
        price: 150,
        image: [p_img17],
        category: "Office",
        subCategory: "Furniture",
        sizes: ["Small", "Medium", "Large"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Drawing Pads",
        description: "A set of high-quality drawing pads for sketching and illustrations.",
        price: 180,
        image: [p_img18],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["A4", "A3"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Desk Organizer",
        description: "A compact desk organizer to keep your office supplies in place.",
        price: 160,
        image: [p_img19],
        category: "Office",
        subCategory: "Accessories",
        sizes: ["Small", "Medium", "Large"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Art Sketchbook",
        description: "A sketchbook with high-quality paper for drawing and sketching.",
        price: 190,
        image: [p_img20],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["A4", "A3"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "School Organizer",
        description: "A compact organizer to store books, notebooks, and stationery items.",
        price: 170,
        image: [p_img21],
        category: "School",
        subCategory: "Accessories",
        sizes: ["Small", "Medium", "Large"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaav",
        name: "School Locker",
        description: "A small locker for securely storing books and supplies.",
        price: 200,
        image: [p_img22],
        category: "School",
        subCategory: "Furniture",
        sizes: ["Small", "Medium", "Large"],
        date: 1716635445448,
        bestseller: false
    },
        {
            _id: "aaaaw",
            name: "Pack of 5 Gel Pens",
            description: "A pack of 5 vibrant gel pens perfect for writing, drawing, or doodling, offering smooth ink flow and bright colors.",
            price: 180,
            image: [p_img23],
            category: "School",
            subCategory: "Stationery",
            sizes: ["Standard"],
            date: 1716636545448,
            bestseller: false
        },
        {
            _id: "aaaax",
            name: "Set of 12 Colored Pencils",
            description: "A set of 12 high-quality colored pencils with rich pigments for easy shading and coloring, ideal for school projects and artwork.",
            price: 210,
            image: [p_img24],
            category: "School",
            subCategory: "Stationery",
            sizes: ["Standard"],
            date: 1716637645448,
            bestseller: false
        },
        {
            _id: "aaaay",
            name: "Glitter Gel Pens Set",
            description: "A set of 10 glitter gel pens that add sparkle and shine to your artwork or notes. Perfect for creative expression.",
            price: 190,
            image: [p_img25],
            category: "School",
            subCategory: "Stationery",
            sizes: ["Standard"],
            date: 1716638745448,
            bestseller: false
        },
        {
            _id: "aaaaz",
            name: "Leather Zip-Front Notebook",
            description: "A sleek, zip-front leather notebook with smooth pages, ideal for journaling, note-taking, and professional use.",
            price: 220,
            image: [p_img26],
            category: "Office",
            subCategory: "Notebooks",
            sizes: ["A5", "A4"],
            date: 1716639845448,
            bestseller: false
        },

    {
        _id: "aaaba",
        name: "Portable Pencil Sharpener",
        description: "A compact and portable pencil sharpener, perfect for on-the-go use. Ideal for school or office supplies.",
        price: 150,
        image: [p_img27],
        category: "School",
        subCategory: "Stationery",
        sizes: ["Standard"],
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "Sticky Notes Pack",
        description: "A pack of colorful sticky notes, perfect for jotting down quick notes, reminders, or bookmarking pages.",
        price: 120,
        image: [p_img28],
        category: "School",
        subCategory: "Stationery",
        sizes: ["Standard"],
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Filing Cabinet Organizer",
        description: "A sleek and practical filing cabinet organizer with multiple compartments to store documents, files, and stationery.",
        price: 550,
        image: [p_img29],
        category: "Office",
        subCategory: "Storage",
        sizes: ["Standard"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "Desk Calendar",
        description: "A stylish desk calendar with ample space for notes and appointments, designed to keep your desk organized.",
        price: 200,
        image: [p_img30],
        category: "Office",
        subCategory: "Accessories",
        sizes: ["Standard"],
        date: 1716644245448,
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Art Easel Stand",
        description: "A foldable, adjustable easel stand for supporting canvas while painting. Great for both professionals and hobbyists.",
        price: 700,
        image: [p_img31],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["Standard"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Watercolor Paper Block",
        description: "High-quality watercolor paper block, perfect for watercolor painting. The thick texture prevents bleeding and ensures vibrant colors.",
        price: 450,
        image: [p_img32],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["A4", "A3"],
        date: 1716646445448,
        bestseller: false
    },
    {
        _id: "aaabg",
        name: "Multicolor Highlighters Set",
        description: "A set of 6 vibrant highlighters, perfect for emphasizing important points in textbooks or notes.",
        price: 180,
        image: [p_img33],
        category: "School",
        subCategory: "Stationery",
        sizes: ["Standard"],
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Pencil Case with Zipper",
        description: "A spacious pencil case with a zipper, designed to organize your pens, pencils, and other stationery in one place.",
        price: 160,
        image: [p_img34],
        category: "School",
        subCategory: "Stationery",
        sizes: ["Standard"],
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Desk Organizer Tray",
        description: "A modern desk organizer tray to store pens, pencils, paper clips, and other office supplies. Keeps your workspace tidy.",
        price: 250,
        image: [p_img35],
        category: "Office",
        subCategory: "Accessories",
        sizes: ["Standard"],
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Art Palette Set",
        description: "A professional art palette set for mixing paints. Ideal for watercolor, acrylic, and oil paints.",
        price: 220,
        image: [p_img36],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["Standard"],
        date: 1716650845448,
        bestseller: false
    },
    {
        _id: "aaabk",
        name: "Crafting Scissors Set",
        description: "A set of high-quality crafting scissors with sharp blades, perfect for detailed cutting in art projects and scrapbooking.",
        price: 210,
        image: [p_img37],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["Standard"],
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Desk Lamp with Adjustable Arm",
        description: "A stylish desk lamp with adjustable arm and dimming feature, perfect for providing focused light while working or reading.",
        price: 400,
        image: [p_img38],
        category: "Office",
        subCategory: "Accessories",
        sizes: ["Standard"],
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "Chalkboard Easel",
        description: "A portable chalkboard easel perfect for writing notes, to-do lists, or for use in meetings and presentations.",
        price: 350,
        image: [p_img39],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["Standard"],
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Clip-on File Folder",
        description: "A clip-on file folder for organizing and carrying documents securely. Perfect for office or school use.",
        price: 180,
        image: [p_img40],
        category: "Office",
        subCategory: "Stationery",
        sizes: ["A4"],
        date: 1716655245448,
        bestseller: false
    },
    {
        _id: "aaabo",
        name: "Watercolor Brush Pens Set",
        description: "A set of 12 watercolor brush pens that can be used to create beautiful watercolor effects with ease.",
        price: 320,
        image: [p_img41],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["Standard"],
        date: 1716656345448,
        bestseller: false
    },
    {
        _id: "aaabp",
        name: "Sticky Tab Set",
        description: "A set of adhesive sticky tabs for organizing and marking important pages or sections in books or binders.",
        price: 130,
        image: [p_img42],
        category: "School",
        subCategory: "Stationery",
        sizes: ["Standard"],
        date: 1716657445448,
        bestseller: false
    },
    {
        _id: "aaabq",
        name: "Multipurpose Tape Dispenser",
        description: "A heavy-duty tape dispenser that is easy to use and perfect for both home and office environments.",
        price: 180,
        image: [p_img43],
        category: "Office",
        subCategory: "Stationery",
        sizes: ["Standard"],
        date: 1716658545448,
        bestseller: false
    },
    {
        _id: "aaabr",
        name: "Canvas Art Set",
        description: "A complete set for canvas painting, including canvas boards, acrylic paints, and brushes.",
        price: 500,
        image: [p_img44],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["Standard"],
        date: 1716659645448,
        bestseller: false
    },
    {
        _id: "aaabs",
        name: "Wooden Paperweight",
        description: "A beautifully carved wooden paperweight, perfect for organizing papers and documents on your desk.",
        price: 250,
        image: [p_img45],
        category: "Office",
        subCategory: "Accessories",
        sizes: ["Standard"],
        date: 1716660745448,
        bestseller: false
    },
    {
        _id: "aaabt",
        name: "Stamping Ink Pad",
        description: "A high-quality ink pad for stamping. Perfect for both school projects and office use.",
        price: 150,
        image: [p_img46],
        category: "Office",
        subCategory: "Stationery",
        sizes: ["Standard"],
        date: 1716661845448,
        bestseller: false
    },
    {
        _id: "aaabu",
        name: "Personalized Name Stamp",
        description: "A custom name stamp for personal or business use, easy to use and perfect for labeling.",
        price: 350,
        image: [p_img47],
        category: "Office",
        subCategory: "Stationery",
        sizes: ["Standard"],
        date: 1716662945448,
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "Drawing Sketchbook",
        description: "A premium sketchbook with thick pages, ideal for drawing, sketching, and doodling.",
        price: 250,
        image: [p_img48],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["A5", "A4"],
        date: 1716664045448,
        bestseller: false
    },
    {
        _id: "aaabw",
        name: "Notebook with Pen Holder",
        description: "A hardcover notebook with a built-in pen holder, perfect for office, school, and personal use.",
        price: 200,
        image: [p_img49],
        category: "School",
        subCategory: "Stationery",
        sizes: ["A5"],
        date: 1716665145448,
        bestseller: false
    },
    {
        _id: "aaabx",
        name: "Paper Clips Box",
        description: "A box of 100 premium paper clips for organizing documents, available in standard silver or colorful options.",
        price: 100,
        image: [p_img50],
        category: "Office",
        subCategory: "Stationery",
        sizes: ["Standard"],
        date: 1716666245448,
        bestseller: false
    },
    {
        _id: "aaaby",
        name: "Art Supplies Storage Box",
        description: "A sturdy, spacious box for storing and organizing art supplies, pens, paints, and brushes.",
        price: 350,
        image: [p_img51],
        category: "Art",
        subCategory: "Art Supplies",
        sizes: ["Standard"],
        date: 1716667345448,
        bestseller: false
    },
    {
        _id: "aaabz",
        name: "Projector Screen",
        description: "A portable projector screen for home or office use, perfect for presentations, meetings, and movie nights.",
        price: 700,
        image: [p_img52],
        category: "Office",
        subCategory: "Accessories",
        sizes: ["Standard"],
        date: 1716668445448,
        bestseller: false
    }
];

    
    
