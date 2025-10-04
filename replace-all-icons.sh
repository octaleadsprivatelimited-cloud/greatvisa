#!/bin/bash

echo "🔄 Replacing all lucide-react imports with react-icons..."

cd client

# Find all files that import from lucide-react and replace them
find src -name "*.tsx" -type f -exec grep -l "from 'lucide-react'" {} \; | while read file; do
    echo "Processing: $file"
    
    # Replace the import statement with react-icons
    sed -i '' "s/from 'lucide-react'/from 'react-icons\/hi'/g" "$file"
    
    # Replace specific icons with react-icons equivalents using aliases
    sed -i '' "s/Phone/HiPhone as Phone/g" "$file"
    sed -i '' "s/MessageCircle/HiChatAlt2 as MessageCircle/g" "$file"
    sed -i '' "s/Menu/HiMenu as Menu/g" "$file"
    sed -i '' "s/X/HiX as X/g" "$file"
    sed -i '' "s/ChevronDown/HiChevronDown as ChevronDown/g" "$file"
    sed -i '' "s/ChevronLeft/HiChevronLeft as ChevronLeft/g" "$file"
    sed -i '' "s/ChevronRight/HiChevronRight as ChevronRight/g" "$file"
    sed -i '' "s/Globe/HiGlobe as Globe/g" "$file"
    sed -i '' "s/User/HiUser as User/g" "$file"
    sed -i '' "s/Briefcase/HiBriefcase as Briefcase/g" "$file"
    sed -i '' "s/GraduationCap/HiAcademicCap as GraduationCap/g" "$file"
    sed -i '' "s/Plane/HiPaperAirplane as Plane/g" "$file"
    sed -i '' "s/Home/HiHome as Home/g" "$file"
    sed -i '' "s/FileText/HiDocumentText as FileText/g" "$file"
    sed -i '' "s/Users/HiUsers as Users/g" "$file"
    sed -i '' "s/HelpCircle/HiQuestionMarkCircle as HelpCircle/g" "$file"
    sed -i '' "s/Heart/HiHeart as Heart/g" "$file"
    sed -i '' "s/CheckCircle/HiCheckCircle as CheckCircle/g" "$file"
    sed -i '' "s/ArrowRight/HiArrowRight as ArrowRight/g" "$file"
    sed -i '' "s/Star/HiStar as Star/g" "$file"
    sed -i '' "s/Quote/HiChat as Quote/g" "$file"
    sed -i '' "s/Building2/HiOfficeBuilding as Building2/g" "$file"
    sed -i '' "s/UserCheck/HiUserCheck as UserCheck/g" "$file"
    sed -i '' "s/Sparkles/HiSparkles as Sparkles/g" "$file"
    sed -i '' "s/Shield/HiShieldCheck as Shield/g" "$file"
    sed -i '' "s/Zap/HiLightningBolt as Zap/g" "$file"
    sed -i '' "s/Award/HiAward as Award/g" "$file"
done

echo "✅ All icon replacements complete!"
echo "🧪 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! All lucide-react issues resolved."
else
    echo "❌ Build failed. Please check the errors above."
fi
