package com.mappable.backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MappableApplication

fun main(args: Array<String>) {
	runApplication<MappableApplication>(*args)
}
