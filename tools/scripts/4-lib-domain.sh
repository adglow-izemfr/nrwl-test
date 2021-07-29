echo "🚧 page libraries ";

read -p "Path to Parent Module: [apps/www/src/app/core/core-routing.module.ts] " PARENTMODULE
PARENTMODULE=${PARENTMODULE:-'apps/www/src/app/core/core-routing.module.ts'}

read -p "What prefix do you wanna use? [rsrch] " PREFIX
PREFIX=${PREFIX:-'rsrch'}

echo " ✍ generate queryable-resource page";
nx g library queryable-resource --importPath=@$PREFIX/queryable-resource --prefix=$PREFIX --routing --lazy --parentModule=$PARENTMODULE --tags='domain, page'
ng g c queryable-resource --project=domain-queryable-resource --flat --skipTests=false --skipSelector --type=Page
nx g c resource-list  --project=domain-queryable-resource
ng g s queryable-resource --project=domain-queryable-resource
ng g interface models/queryable-resource --project=domain-queryable-resource
ng g interface models/resource --project=domain-queryable-resource
git add *
git commit -m 'feat: generate queryable-resource page'

echo "🏠 page libraries";
