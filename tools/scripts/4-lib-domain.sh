echo "🚧 page libraries ";

read -p "Path to Parent Module: [apps/www/src/app/core/core-routing.module.ts] " PARENTMODULE
PARENTMODULE=${PARENTMODULE:-'apps/www/src/app/core/core-routing.module.ts'}

read -p "What prefix do you wanna use? [rsrch] " PREFIX
PREFIX=${PREFIX:-'rsrch'}

echo " ✍ generate home page";
nx g library home --importPath=@$PREFIX/home --prefix=$PREFIX --routing --lazy --parentModule=$PARENTMODULE --tags='domain, page'
nx g c home --project=domain-home --flat --skipTests=false --skipSelector --type=Page
nx g c category-list  --project=domain-home
nx g s home --project=domain-home
ng g interface models/category --project=domain-home
git add *
git commit -m 'feat: generate home page'

echo " ✍ generate not-found page";
nx g library not-found --importPath=@$PREFIX/not-found --prefix=$PREFIX --routing --lazy --parentModule=$PARENTMODULE --tags='domain, page'
nx g c not-found --project=domain-not-found --flat --skipSelector --type=Page
git add *
git commit -m 'feat: generate not-found page'

echo " ✍ generate resource page";
nx g library resource --importPath=@$PREFIX/resource --prefix=$PREFIX --routing --lazy --parentModule=$PARENTMODULE --tags='domain, page'
ng g c resource --project=domain-resource --flat --skipTests=false --skipSelector --type=Page
ng g resolver resource --project domain-resource --skip-tests=true
ng g s resource --project=domain-resource
ng g interface models/resource --project=domain-resource
git add *
git commit -m 'feat: generate resource page'

echo " ✍ generate category page";
nx g library category --importPath=@$PREFIX/category --prefix=$PREFIX --routing --lazy --parentModule=$PARENTMODULE --tags='domain, page'
ng g c category --project=domain-category --flat --skipTests=false --skipSelector --type=Page
nx g c resource-list  --project=domain-category
ng g s category --project=domain-category
ng g interface models/category --project=domain-category
ng g interface models/resource --project=domain-category
git add *
git commit -m 'feat: generate category page'

echo " ✍ generate queryable-resource page";
nx g library queryable-resource --importPath=@$PREFIX/queryable-resource --prefix=$PREFIX --routing --lazy --parentModule=$PARENTMODULE --tags='domain, page'
ng g c queryable-resource --project=domain-queryable-resource --flat --skipTests=false --skipSelector --type=Page
nx g c resource-list  --project=domain-queryable-resource
ng g s queryable-resource --project=domain-queryable-resource
ng g interface models/queryable-resource --project=domain-queryable-resource
ng g interface models/resource --project=domain-queryable-resource
git add *
git commit -m 'feat: generate queryable-resource page'

echo " generate resource-new page";
nx g library resource-new --importPath=@$PREFIX/resource-new --prefix=$PREFIX --routing --lazy --parentModule=$PARENTMODULE --tags='domain, page'
nx g c resource-new --project=domain-resource-new --flat --skipTests=false --skipSelector --type=Page
nx g c resource-new --project=domain-resource-new --type=Form
nx g s resource-new --project=domain-resource-new --flat
ng g interface models/category --project=domain-resource-new
ng g interface models/resource --project=domain-resource-new
git add *
git commit -m 'feat: generate resource-new page'

echo " generate search page";
nx g library search --importPath=@$PREFIX/search --prefix=$PREFIX --routing --lazy --parentModule=$PARENTMODULE --tags='domain, page'
nx g c search --project=domain-search --flat --skipTests=false --skipSelector --type=Page
nx g c results --project=domain-search
nx g s search --project=domain-search
ng g interface models/resource --project=domain-search
git add *
git commit -m 'feat: generate search page'

echo "🏠 page libraries";

echo "🚧 widget libraries ";

echo " ✍ generate search-box widget";
nx g library search-box --importPath=@$PREFIX/search-box --prefix=$PREFIX --tags='domain, widget'
nx g c search-box --project=domain-search-box --flat --skipTests=false --type=Widget --export=true
nx g c search-box --project=domain-search-box
nx g s search-box --project=domain-search-box
git add *
git commit -m 'feat: generate search-box widget'

echo "🏠 widget libraries";
