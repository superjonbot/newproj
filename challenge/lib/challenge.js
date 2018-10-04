var exports = module.exports = {}

const _ = require('lodash')
const CategoryStats = require('../lib/challenge/models/category_stats').CategoryStats

/**
 * Change this to return 'world' to fix the first failing test. Run `make test`
 * to confirm that `001 hello world` passes, then repeat for each of the
 * remaining tests.
 */
exports.hello = function() {
   return 'world'
}

/**
 * Returns a new array where each element from `xs` has been doubled, but only
 * return doubled values greater than 10.
 *
 * Results should be returned in ascending order.
 *
 * xs: [Number]
 * returns: [Number]
 */
exports.doubleAndGreaterThanTen = function(xs) {
   const f = (a,b)=>{
       const timesTwo=b*2;
       (timesTwo>10)?a.push(timesTwo):null;
       return a
   }
  return xs.reduce(f,[]);


}

/**
 * Returns an array of ids for all projects in the art category.
 *
 * Results should be returned in ascending order.
 *
 * projects: [Project]
 * returns: [Number]
 */
exports.selectIdsOfArtCategoryProjects = function(projects) {
    const f = (a,b)=>{
        (b.category==='art')?a.unshift(b.id):null;
        return a
    }
    return projects.reduce(f,[]);
}

/**
 * Each pledge has a baseAmount, shipping, and tax value. Adding these
 * together gives the amount a backer was charged for a pledge.
 * 
 * Given an array of pledges, calculate the total that was charged for all
 * the pledges combined.
 * 
 * pledges: [Pledge]
 * returns: Number
 */
exports.totalAmountPledged = function(pledges) {
    const f = (a,b)=>{
        const total=Number(b.baseAmount)+Number(b.shipping)+Number(b.tax)
        return Number(a)+total
    }
    return pledges.reduce(f,[]);
}

/**
 * Given an array of projects, groups projects into categories then calculates
 * stats for each unique category, represented by a CategoryStats value.
 * The CategoryStats model has more details on how to calculate each field from
 * an array of projects belonging to the same category.
 *
 * Results should be returned in ascending order by category name.
 *
 * projects: [Project]
 * returns: [CategoryStats]
 */
exports.categoryStatsSortedByCategoryName = function(projects) {
        let returnArray=[];
        let categories={};
        for (let i=0;i<projects.length;i++){
            const categoryName=categories[projects[i].category];
            if (!categoryName){categories[projects[i].category]=[]};
            categories[projects[i].category].push(projects[i])
        };
        const subCategories=Object.keys(categories);
        for (let x in subCategories) {
            let tempObj={
                category:subCategories[x],
                totalBackers:0,
                totalPledged:0,
                totalProjects:categories[[subCategories[x]]].length
            };
            for(cnt=0;cnt<tempObj.totalProjects;cnt++){
                tempObj.totalBackers=tempObj.totalBackers+=categories[[subCategories[x]]][cnt].backers;
                tempObj.totalPledged=tempObj.totalPledged+=categories[[subCategories[x]]][cnt].pledged;
            }
            tempObj.meanBackers = Math.floor(tempObj.totalBackers/tempObj.totalProjects);
            tempObj.meanPledged = Math.floor(tempObj.totalPledged/tempObj.totalProjects);

            returnArray.push(tempObj)
        }

        const onCategory=(a,b)=>{
            if(a.category < b.category) return -1;
            if(a.category > b.category) return 1;
            return 0;};

        return returnArray.sort(onCategory)
}

/*
 * This method takes a project and an array of pledge changes, and returns
 * an array of booleans representing whether the project had reached its goal
 * after each pledge change.
 *
 * A project begins with an initial amount pledged, and reaches its goal if
 * the total value of pledges is equal to or greater than the project's goal.
 * It is possible for a project to reach its goal, then fall back under its
 * goal if a backer cancels or lowers a pledge.
 *
 * project: Project
 * pledgeChanges: [PledgeChange]
 * returns: [Boolean]
*/
exports.hadProjectReachedGoalAfterEachPledgeChange = function(project, pledgeChanges) {

    const f = (a,b)=>{
        //console.log(` a:${JSON.stringify(a)} b:${JSON.stringify(b)} ${project.pledged+b.delta}`)
        project.pledged=project.pledged+b.delta;
        const bool=(project.pledged>project.goal)
        a.push(bool);
        return a;
    }
    return pledgeChanges.reduce(f,[]);
}

/**
 * Calculates the change in numbers for each month from year 1 to year 2.
 *
 * The arguments are not guaranteed to contain data for all 12 months of
 * a year. In that case, only return stats where data exists for both months.
 *
 * examples:
 *
 * compareMonthlyStatsPerYear(
 *   [1, 3, 2, 4, 6, 8, 0, 0, 3, 2, 6, 7],
 *   [3, 4, 5, 4, 5, 6, 7, 7, 6, 8, 9, 9],
 * )
 * => [2, 1, 3, 0, -1, -2, 7, 7, 3, 6, 3, 2]
 *
 * compareMonthlyStatsPerYear([5, 7], [9, 8, 3])
 * => [4, 1]
 *
 * monthlyStatsYear1: [Number]
 * monthlyStatsYear2: [Number]
 * returns: [Number]
 */
exports.compareMonthlyStatsPerYear = function(monthlyStatsYear1, monthlyStatsYear2) {
    let returnArray=[];
    let validLoops=Math.min(monthlyStatsYear1.length,monthlyStatsYear2.length);
    for(let i=0;i<validLoops;i++){
        returnArray.push(monthlyStatsYear2[i]-monthlyStatsYear1[i])
    }
    return returnArray;
}

/**
 * For a given project, find other projects that have the same category, sorted
 * in descending order by the number of backers. The array of projects may
 * contain the project given as the first argument; this project should not be
 * returned.
 *
 * project: Project
 * projects: [Project]
 */
const recommendProjectsFromSameCategory = function(project, projects) {
    const f = (a,b)=>{
        if (project.category===b.category&&project.name!=b.name){a.push(b)}
        return a
    }
    const onBackers=(a,b)=>{
        if(a.backers < b.backers) return 1;
        if(a.backers > b.backers) return -1;
        return 0;};

    return projects.reduce(f,[]).sort(onBackers);
}
exports.recommendProjectsFromSameCategory = recommendProjectsFromSameCategory

/**
 * Returns a list of recommended projects based on projects the user has
 * already backed. Use `recommendProjectsFromSameCategory` to
 * generate an array of recommendations for each project, then return a single
 * array with all the recommendations sorted in descending order by the number
 * of backers. Should not contain duplicates or projects the user has already
 * backed.
 *
 * backedProjects: [Project]
 *   An array of projects the user has backed.
 * allProjects: [Project]
 *   An array of all projects. It may include projects the user has backed.
 * returns: [Project]
 */
exports.recommendationFeed = function(backedProjects, allProjects) {
    let collection=[];
    backedProjects.forEach((project, index) => {
        collection.push.apply(collection,recommendProjectsFromSameCategory(project,allProjects));
});
    const onBackers=(a,b)=>{
        if(a.backers < b.backers) return 1;
        if(a.backers > b.backers) return -1;
        return 0;};
    const killBackedProjects=(a,b)=>{
        remove=false;
        for(i=0;i<backedProjects.length;i++){
            if(backedProjects[i].name===b.name){remove=true}
        }
        if(!remove){a.push(b)}
        return a;
    }
    let lastName=undefined;
    const killDupes=(a,b)=>{
            if(lastName!=b.name){
                a.push(b);
                lastName=b.name;
            }

        return a;
    }
    return collection.sort(onBackers).reduce(killBackedProjects,[]).reduce(killDupes,[]);
}

/**
 * Takes a lambda which itself takes two arguments, returns a new lambda like
 * the original but with the two arguments flipped.
 *
 * f: (a, b) -> c
 * returns: (b, a) -> c
 */
exports.flip = function(f) {
    return (b,a)=>f.call(f,a,b)
}

/**
 * Creators have access to an activity feed for their project. Often an
 * activity will occur many times in a row, e.g.: they might receive 15 likes
 * on one of their project updates, and then a backer will make a pledge.
 *
 * Rather than rendering 15 consecutive likes, we would prefer an activity feed
 * that indicates how many times an activity appeared in a row. This method
 * returns an array of pairs, where the first component of each pair is an
 * activity, and the second component is how many times that activity appeared
 * in a row.
 *
 * example:
 *
 * activityFeed(['comment', 'comment', 'like', 'comment'])
 * => [['comment', 2], ['like', 1], ['comment', 1]]
 *
 * activities: [String]
 * returns: [[String, Number]]
 */
exports.activityFeed = function(activities) {
    activities.push('end');
    let cnt=0;
    let lastActivity=undefined;
    const f = (a,b)=>{
        cnt++;
        if(lastActivity!=b){
            a.push([lastActivity,cnt]);
            cnt=0;
        }
        lastActivity=b;
        return a;
    }
    let returnArray=activities.reduce(f,[])
    returnArray.shift();
    return returnArray;
}
