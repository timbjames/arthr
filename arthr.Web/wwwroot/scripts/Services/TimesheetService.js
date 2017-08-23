"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timesheetService = {
    delete: function (id) {
        return {
            method: 'delete',
            url: "http://localhost:5001/api/timesheet/" + id
        };
    },
    get: function () {
        return {
            method: 'get',
            url: "http://localhost:5001/api/timesheet"
        };
    },
    getById: function (id) {
        return {
            method: 'get',
            url: "http://localhost:5001/api/timesheet/" + id
        };
    },
    post: function () {
        return {
            method: 'post',
            url: "http://localhost:5001/api/timesheet"
        };
    },
    put: function () {
        return {
            method: 'put',
            url: "http://localhost:5001/api/timesheet"
        };
    }
};
exports.TimesheetService = timesheetService;
/*
    Debug Info:
    , /api/mastersite/{id:int}, typeof(bool), , /api/mastersite, typeof(System.Collections.Generic.List<arthr.Models.Core.MasterSite>), , /api/mastersite/{id:int}, typeof(arthr.Models.Core.MasterSite), , /api/mastersite, typeof(bool), , /api/mastersite, typeof(bool), , /api/project/complete, typeof(bool), , /api/project/delele/{id:int}, typeof(bool), , /api/project, typeof(System.Collections.Generic.List<arthr.Models.Core.Project>), , /api/project/getbyid/{id:int}, typeof(arthr.Models.Core.Project), , /api/project/template, typeof(arthr.Models.Core.ProjectUpsertViewModel), , /api/project, typeof(bool), , /api/project, typeof(bool), , /api/staff/{id:int}, typeof(bool), , /api/staff, typeof(System.Collections.Generic.List<arthr.Models.Core.Staff>), , /api/staff/{id:int}, typeof(arthr.Models.Core.Staff), , /api/staff, typeof(bool), , /api/staff, typeof(bool), , /api/task/{id:int}, typeof(bool), , /api/task, typeof(System.Collections.Generic.List<arthr.Models.arTask.AnthRTask>), , /api/task/{id:int}, typeof(arthr.Models.arTask.AnthRTask), , /api/task, typeof(bool), , /api/task, typeof(bool), , /api/timesheet/{id:int}, typeof(bool), , /api/timesheet, typeof(System.Collections.Generic.List<arthr.Models.arTask.Timesheet>), , /api/timesheet/{id:int}, typeof(arthr.Models.arTask.Timesheet), , /api/timesheet, typeof(bool), , /api/timesheet, typeof(bool) Unknown Types: Timesheet
*/
//# sourceMappingURL=TimesheetService.js.map