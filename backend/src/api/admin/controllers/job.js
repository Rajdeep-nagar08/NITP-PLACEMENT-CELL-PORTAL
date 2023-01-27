const { helper_is_job_eligible} = require("../../student/controllers/util");
const AdmZip = require("adm-zip");
const { readFileSync } = require("fs");
const path = require("path");
const process = require("process");
const student = require("./student");

module.exports = {
	async get_eligible_students(ctx) {

		console.log("Backend file working")

		// const { jobId } = { 1 };
		
	//	const jobId = 1;

		const { jobId } = ctx.query;

		console.log(1);

		console.log("JOB ID= "+jobId)

		console.log(2);

		if (!jobId) {
			return ctx.badRequest(null, [{ messages: [{ id: "Missing job id", received_jobId: jobId || null }] }]);
		}

		console.log(3);

		const job_self = await strapi.db.query("api::job.job").findOne({
			where: {
				id: jobId,
			},
         populate: ["company"]
		});

		//console.log("Fuck off")

		console.log(4);

		console.log("JOB =>" +job_self);

		if (!job_self) {
			return ctx.notFound(null, [{ messages: [{ id: "Job not found" }] }]);
		}

		console.log(5);

		const { job_title, approval_status, job_status, classification, min_X_marks, min_XII_marks, category, start_date, min_cpi, only_for_pwd, only_for_ews, eligible_courses, only_for_female } = job_self;
		
		console.log(job_title, approval_status, job_status, classification, min_X_marks, min_XII_marks, category, start_date, min_cpi, only_for_pwd, only_for_ews, eligible_courses, only_for_female)

		if (approval_status !== "approved") {
            return ctx.badRequest(null, [{ messages: [{ id: "Job not approved yet" }] }]);
        }

		console.log(6);

		let eligible_students = await strapi.db.query("api::student.student").findMany({
			where: {
				roll: { $gte: -1 },
                // X_marks: { $gte: min_X_marks},
				// XII_marks: {$gte: min_XII_marks},
			    // cpi: {gte: min_cpi},
			    // approval_status: "approved",
			},
			populate: ["program", "course", "department"]
		});

		if (!Array.isArray(eligible_students)) {
            return ctx.internalServerError(null, [{ messages: [{ id: "Could not get eligible students" }] }]);
        }

		console.log(eligible_students)

		selected_applications=[];

	//	eligible_Students = [];

		const is_eligible = await Promise.all(eligible_students.map(
			async (student) => (
				await helper_is_job_eligible(student, job_self, selected_applications))
		));

		eligible_students = eligible_students.filter((_, index) => is_eligible[index]);

		console.log("this" + eligible_students);

		ctx.body=eligible_students;

	//	console.log(eligible_students);

	//	return job;

	//return eligible_students;

	},



    // async get_applied_students(ctx) {
    //     const { jobId } = ctx.query;

    //     if (!jobId) {
    //         return ctx.badRequest(null, [{ messages: [{ id: "Missing Job Id", received_jobId: jobId || null }] }]);
    //     }

    //     const applied_students = await helper_get_applications1(jobId);

    //     ctx.body = applied_students;
    // },

};