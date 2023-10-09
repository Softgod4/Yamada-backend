"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConnect = void 0;
const pg_1 = require("pg");
function databaseConnect(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            user: "postgres",
            password: "s5620925",
            host: "localhost",
            port: 5432,
            database: "Test"
        });
        try {
            yield client.connect();
            const result = yield client.query(query);
            return result.rows;
        }
        catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    });
}
exports.databaseConnect = databaseConnect;